import {
    RefObject,
    useEffect,
    useRef,
    useState
} from "react"

import {
    Button,
    createListCollection,
    Flex,
    HStack,
    Image,
    ListCollection,
    SelectValueChangeDetails,
    Switch,
    Text,
    Textarea,
    VStack
} from "@chakra-ui/react"

import {
  SelectRoot,
  SelectTrigger,
  SelectLabel,
  SelectValueText,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

import SpeechRecognition from "@/features/speech_recognition"

const audioInputDevices: ListCollection<unknown> = createListCollection({
  items: []
})

const Index = () => {
    const [ speechRecognition, setSpeechRecognition ] = useState<SpeechRecognition>(null)
    const [ isStarted, setIsStarted ] = useState<boolean>(false)
    const [ isConnect, setIsConnect ] = useState<boolean>(false)

    const [ facialExpression, setFacialExpression ] = useState<string>("-")
    const [ animation, setAnimation ] = useState<string>("-")
    const [ checked, setChecked ] = useState<boolean>(true)

    const textarea_ref: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null)
    const textareaOutput_ref: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textarea_ref.current) {
            const speechRecognition: SpeechRecognition = new SpeechRecognition(
                textarea_ref.current,
                textareaOutput_ref.current,
                setIsConnect,
                setFacialExpression,
                setAnimation
            )

            speechRecognition.getAudioDevice()
            .then((mdis: Array<MediaDeviceInfo>) => {
                //console.log(mdis)

                mdis.forEach((mdi: MediaDeviceInfo) => {
                    audioInputDevices.items.push({
                        label: mdi.label,
                        value: mdi.deviceId
                    })
                })
            })

            setSpeechRecognition(speechRecognition)
        }
    }, [])

    return (
        <Flex
            w="100vw"
            h="100vh"
            justifyContent="center"
            justifyItems="center"
            alignItems="center"
            bg="linear-gradient(0deg, rgba(0,200, 255,1) 0%, rgb(203, 246, 255) 100%)"
        >
            <Flex
                p="20px"
                w="full"
                maxW="500px"
                bgColor="rgba(0, 53, 83, 0.8)"
                rounded="15px"
                boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            >
                <VStack
                    w="full"
                >
                    <Image
                        src="images/logo.png"
                    />

                    <Button
                        color="white"
                        bgColor={ !isConnect ? "green" : "red" }
                        onClick={ () => speechRecognition?.connectWebSocket()}
                    >{ !isConnect ? "CONNECT" : "DISCONNECT" }</Button>

                    <Text
                        fontWeight="bold"
                    >:: TEAPOT Speech Recognition ( Namcha AI Assistant ) ::</Text>

                    <HStack>
                        <Button
                            disabled={ isStarted }
                            bgColor="green"
                            color="white"
                            onClick={ () => {
                                    if (speechRecognition && !isStarted) {
                                        speechRecognition.start()
                                        setIsStarted(true)
                                    }
                                }
                            }
                        >START</Button>

                        <Button
                            disabled={ !isStarted }
                            bgColor="red"
                            color="white"
                            onClick={ () => {
                                    if (speechRecognition && isStarted) {
                                        speechRecognition.stop()
                                        setIsStarted(false)
                                    }
                                }
                            }
                        >STOP</Button>
                    </HStack>

                    <SelectRoot
                        collection={ audioInputDevices }
                        onValueChange={ (details: SelectValueChangeDetails<unknown>) => speechRecognition?.mediaChange(details.value[0]) }
                    >

                        <SelectLabel>Select Audio input devices.</SelectLabel>

                        <SelectTrigger
                            bgColor="black"
                            color="white"
                        >
                            <SelectValueText placeholder="Default - ..." />
                        </SelectTrigger>

                        <SelectContent
                            bgColor="white"
                            color="black"
                        >
                            {
                                audioInputDevices.items.map((audioInput: any) => (
                                        <SelectItem
                                            item={ audioInput }
                                            key={ audioInput.value }
                                        >
                                            { audioInput.label }
                                        </SelectItem>
                                    )
                                )
                            }
                        </SelectContent>
                    </SelectRoot>

                    <Textarea
                        ref={ textarea_ref }
                        w="full"
                        h="100px"
                        readOnly={ true }
                        color="black"
                        bgColor="white"
                    />

                    <HStack
                        gap="30px"
                        fontWeight="bold"
                    >
                        <Text>{ "facialExpression: "+facialExpression }</Text>
                        <Text>{ "animation: "+animation }</Text>
                    </HStack>

                    <Textarea
                        ref={ textareaOutput_ref }
                        w="full"
                        h="100px"
                        readOnly={ true }
                        color="white"
                        bgColor="black"
                    />

                    <Switch.Root
                        checked={ checked }
                        onCheckedChange={ (e) => {
                                setChecked(e.checked)
                                if (speechRecognition) speechRecognition.audioChecked = e.checked
                            }
                        }
                    >
                    <Switch.HiddenInput />
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                    <Switch.Label>Play Audio</Switch.Label>
                    </Switch.Root>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default Index