import axios from 'axios'
import { parseCookies } from 'nookies'

export const getUser = async(ctx) => {
    
    const accessToken = parseCookies(ctx).accessToken

    if(accessToken) {
        const { data } = await axios.get('https://discord.com/api/users/@me', {
            headers: { authorization: `Bearer ${accessToken}`}
        })
    
        return data
    }
}


export const getUserGuildsList = async(ctx) => {

    const accessToken = parseCookies(ctx).accessToken

    if(accessToken){
        const { data } = await axios.get('https://discord.com/api/users/@me/guilds', {
            headers: { authorization: `Bearer ${accessToken}`}
        })

        return data
    }
}

export const getBotGuildsList = async(ctx) => {
    const accessToken = parseCookies(ctx).accessToken
    const botToken = 'NzgzNjM3MDEwODE5OTczMTQy.X8do1g.7tyqavpYneKiw7CEldlQr2uCnOs'

    if(accessToken) {
        const { data } = await axios.get('https://discord.com/api/users/@me/guilds', {
            headers: { authorization: `Bot ${botToken}`}
        })
        return data
    }
}

export const getGuildUser = async(guildId, userId) => {
    const botToken = 'NzgzNjM3MDEwODE5OTczMTQy.X8do1g.7tyqavpYneKiw7CEldlQr2uCnOs'

    const { data } = await axios.get(`https://discord.com/api/guilds/${guildId}/members/${userId}`, {
        headers: { authorization: `Bot ${botToken}`}
    })

    return data

}

export const getGuildRoles = async(guildId) => {
    const botToken = 'NzgzNjM3MDEwODE5OTczMTQy.X8do1g.7tyqavpYneKiw7CEldlQr2uCnOs'

    const { data } = await axios.get(`https://discord.com/api/guilds/${guildId}/roles`, {
        headers: { authorization: `Bot ${botToken}`}
    })

    return data
}
