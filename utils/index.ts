
export const YouTubeGetID = (url: string) => {
    const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
}

export const openDiscordLoginPopup = () => {
    const width: number = 500
    const height: number = 800
    const devUrl: string = 'http://localhost:5000/auth'
    const prodUrl: string = 'https://api.yellobot.me/auth'
    const url: string = process.env.NODE_ENV === 'development' ? devUrl : prodUrl

    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 4;
    window.open(url, "", `width=${width}, height=${height}, top=${top} left=${left}`)
  } 