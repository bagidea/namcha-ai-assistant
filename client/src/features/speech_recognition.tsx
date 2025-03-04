import {
    Dispatch,
    SetStateAction
} from "react"

interface APIData {
    type: string,
    text: string
}

class SpeechRecognition {
    private speechRecognition: any
    private mediaStream: MediaStream | null
    private textarea: HTMLTextAreaElement
    private textareaOutput: HTMLTextAreaElement
    private isStarted: boolean = false
    private sendTimeOut: NodeJS.Timeout

    private socket: WebSocket
    private isConnected: boolean = false
    private setIsConnected: Dispatch<SetStateAction<boolean>>
    private setFacialExpression: Dispatch<SetStateAction<string>>
    private setAnimation: Dispatch<SetStateAction<string>>

    audioChecked: boolean = true

    constructor(
        textarea: HTMLTextAreaElement,
        textareaOutput: HTMLTextAreaElement,
        setIsConnected: Dispatch<SetStateAction<boolean>>,
        setFacialExpression: Dispatch<SetStateAction<string>>,
        setAnimation: Dispatch<SetStateAction<string>>
    ) {
        this.textarea = textarea
        this.textareaOutput = textareaOutput
        this.setIsConnected = setIsConnected
        this.setFacialExpression = setFacialExpression
        this.setAnimation = setAnimation

        this.speechRecognition = new ((window as any)['SpeechRecognition'] || (window as any)['webkitSpeechRecognition'])()

        this.mediaStream = null

        if (this.speechRecognition) {
            console.log("SpeechRecognition started.")

            this.speechRecognition.lang = "th-TH"
            this.speechRecognition.continuous = true
            this.speechRecognition.interimResults = true

            this.speechRecognition.onresult = this.onResult
            this.speechRecognition.onend = this.onEnd
        } else {
            console.log("This Browser does not support SpeechRecognition.")
        }

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
        .then((ms: MediaStream) => this.mediaStream = ms)
        .catch(console.error)
    }

    private beforSendTime = () => {
        clearTimeout(this.sendTimeOut)

        this.sendTimeOut = setTimeout(() => {
            //console.log("Send to server.")

            if (this.textarea.value != "") {
                //console.log(this.textarea.value)

                if (this.socket) {
                    const data: APIData = {
                        type: "request_openai",
                        text: this.textarea.value
                    }

                    this.socket.send(JSON.stringify(data))
                }

                this.textarea.value = ""

                this.speechRecognition.stop()
            }

            this.beforSendTime()
        }, 3000)
    }

    private onResult = (e) => {
        const results: SpeechRecognitionResultList = e.results
        let transcript: string = ""

        Array.from(results).forEach((result: SpeechRecognitionResult) => {
            const alternative: SpeechRecognitionAlternative = result[0]
            transcript += alternative.transcript
        })

        //console.log(transcript)
        this.textarea.value = transcript
        this.beforSendTime()
    }

    private onEnd = () => {
        //this.textarea.value = ""
        if (this.isStarted) this.speechRecognition.start()
    }

    start = () => {
        if (!this.isStarted) this.speechRecognition.start()
        this.isStarted = true
        this.beforSendTime()
        this.textarea.value = ""
    }

    stop = () => {
        if (this.isStarted) this.speechRecognition.stop()
        this.isStarted = false
        clearTimeout(this.sendTimeOut)
        this.textarea.value = ""
    }

    getAudioDevice = async () => {
        const devices: Array<MediaDeviceInfo> = await navigator.mediaDevices.enumerateDevices()
        return devices.filter((mdi: MediaDeviceInfo) => mdi.kind == "audioinput")
    }

    private switchAudioInputDevice = async (deviceId: string) => {
        const newMediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
            audio: { deviceId: { exact: deviceId } },
            video: false
        })

        this.mediaStream = newMediaStream
    }

    mediaChange = (deviceId: string) => {
        console.log(deviceId)
        this.switchAudioInputDevice(deviceId)
    }

    connectWebSocket = () => {
        if (this.socket == undefined) {
            this.socket = new WebSocket("ws://localhost:6336")

            this.socket.onopen = () => {
                console.log("WebSocket connected.")

                this.setIsConnected(true)
            }

            this.socket.onmessage = (e: MessageEvent) => {
                console.log(e.data)

                const json = JSON.parse(e.data)

                //console.log("facialExpression: "+json.facialExpression)
                //console.log("animation: "+json.animation)
                //console.log("text: "+json.text)

                this.setFacialExpression(json.facialExpression)
                this.setAnimation(json.animation)
                this.textareaOutput.value = json.text

                if (this.audioChecked) {
                    const audioBlob = new Blob([Uint8Array.from(atob(json.audio), c => c.charCodeAt(0))], { type: 'audio/mp3' });
                    const audioUrl = URL.createObjectURL(audioBlob)

                    const audio: HTMLAudioElement = new Audio(audioUrl)
                    audio.play()
                }
            }

            this.socket.onclose = () => {
                console.log("WebSocket closed.")

                this.isConnected = false
                this.setIsConnected(false)
            }

            this.socket.onerror = (e: Event) => {
                console.error(e)
            }
        } else {
            this.socket.close()
            this.socket = undefined
        }
    }
}

export default SpeechRecognition