
export const redirect = (ctx: any, path: string) => {
    ctx.res.setHeader("location", path);
    ctx.res.statusCode = 302;
    ctx.res.end();
}


export const authorized = (ctx: any) => {
    const headerCookies = ctx.req.headers.cookie
    let cookies = {}

    if(headerCookies){
        
        const cookieArray = headerCookies.split('; ')
        cookieArray.forEach(entry => {
            const entryArray = entry.split('=')
            cookies[entryArray[0]] = entryArray[1]
        })

       return cookies

    } else redirect(ctx, '/auth/login')
}

export const YouTubeGetID = (url: string) => {
    const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
}

export const openDiscordLoginPopup = () => {
    const width: number = 500
    const height: number = 800
    const devUrl: string = 'https://discord.com/api/oauth2/authorize?client_id=783637010819973142&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fsuccess&response_type=token&scope=identify%20guilds'
    const prodUrl: string = 'https://discord.com/api/oauth2/authorize?client_id=783637010819973142&redirect_uri=https%3A%2F%2Fyellobot.me%2Fauth%2Fsuccess&response_type=token&scope=identify%20guilds'
    const url: string = process.env.NODE_ENV === 'development' ? devUrl : prodUrl

    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 4;
    window.open(url, "", `width=${width}, height=${height}, top=${top} left=${left}`)
  } 