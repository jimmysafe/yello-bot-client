import Head from 'next/head'
import { FC } from 'react'
import Button from '../components/Button'

const discordLink: string = 'https://discord.com/api/oauth2/authorize?client_id=783637010819973142&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fsuccess&response_type=token&scope=identify%20guilds'

const Home: FC = () => {
  
  const openPopup = (
    url: string, 
    width: number, 
    height: number
  ) => {
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 4;
    window.open(url, "", `width=${width}, height=${height}, top=${top} left=${left}`)
  } 

  return (
    <div className="py-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button text="Login" onClick={() => openPopup(discordLink, 500, 800) }/>
    </div>
  )
}


export default Home
