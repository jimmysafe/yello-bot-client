
export const redirect = (ctx: any) => {
    ctx.res.setHeader("location", "/");
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

    } else redirect(ctx)
}

export const YouTubeGetID = (url: string) => {
    const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
}