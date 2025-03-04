import express, { Express } from "express"

import {
    IncomingMessage,
    Server,
    ServerResponse
} from "http"

import {
    WebSocket,
    WebSocketServer
} from "ws"

import HTTPRouter from "./http_router"

import dotenv from "dotenv"
dotenv.config()

import fs from "fs"
import path from "path"
import OpenAI from "openai"

// Express

const app: Express = express()
const port: number = 6336

const server: Server<typeof IncomingMessage, typeof ServerResponse> = app.listen(port, () => {
    console.log("Server is running on port "+port)
})

const httpRouter: HTTPRouter = new HTTPRouter(app)
httpRouter.start()

// WebSocket

interface APIData {
    type: string,
    text: string
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const speechFile = path.resolve("./speech.mp3");

const generateTTS = async (message: string) => {
    const mp3 = await openai.audio.speech.create({
        model: "tts-1-hd",
        voice: "sage",
        input: message,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
    
    const buffer_base64: string = buffer.toString("base64")
    return buffer_base64
}

const wss: WebSocketServer = new WebSocketServer({ server })
const clients: Array<WebSocket> = new Array<WebSocket>()

const sendAll = (msg: string) => {
    const json = JSON.parse(msg)

    const buffer_base64 = generateTTS(json.text)
    .then((buffer_base64: string) => {
        console.log("generate audio completed.")
        //console.log(buffer_base64)

        json.audio = buffer_base64

        clients.forEach((c: WebSocket) => {
            c.send(JSON.stringify(json))
        })
    })
}

const callOpenAI = async (text: string) => {
    try {
        const response: Response = await fetch("http://localhost:6336/chat?message="+text)

        if (!response.ok) {
            throw new Error("Response status: "+response.status)
        }

        const json = await response.json()
        //console.log(json)
        sendAll(JSON.stringify(json))
    } catch (error) { console.error(error)}
}

wss.on("connection", (ws: WebSocket) => {
    console.log("Client connected")

    clients.push(ws)

    ws.on("message", (msg) => {
        //console.log("Received: "+msg)
        //ws.send("Echo: "+msg)

        //clients.forEach((c: WebSocket) => {
            //c.send("Echo: "+msg)
        //})

        const data: APIData = JSON.parse(msg.toString())

        if (data.type == "request_openai") {
            callOpenAI(data.text)
        }
    })

    ws.on("close", () => {
        console.log("Client disconnected")

        for (let i: number = 0; i < clients.length; i++) {
            if (clients[i] === ws) {
                clients.splice(i, 1)
                break
            }
        }
    })
})