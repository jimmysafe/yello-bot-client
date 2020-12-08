import { parseCookies } from 'nookies'

const redirect = (ctx) => {
    ctx.res.setHeader("location", "/");
    ctx.res.statusCode = 302;
    ctx.res.end();
}

export const isLoggedIn = async(ctx) => {
    
    const accessToken = parseCookies(ctx).accessToken

    if(accessToken) {

        const response = await fetch('https://discord.com/api/users/@me', {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        })

        const user = await response.json()

        if(!user.id) redirect(ctx)
    } 
    else 
        redirect(ctx)
}