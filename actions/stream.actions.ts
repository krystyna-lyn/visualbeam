'use server'

import { currentUser } from "@clerk/nextjs/server"
import { StreamClient } from "@stream-io/node-sdk"
import { env } from "process"

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const secretKey = process.env.STREAM_SECRET_KEY

export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error('User not found')
    if (!apiKey) throw new Error('API key not found')
    if (!secretKey) throw new Error('Secret key not found')

    const client = new StreamClient(apiKey, secretKey)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() / 1000) - 60;
    const token = client.createToken(user.id, exp, issued)

    return token
}