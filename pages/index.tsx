import Head from 'next/head'
import { FC } from 'react'
import Button from '../components/Button'

const discordLink = 'https://discord.com/api/oauth2/authorize?client_id=783637010819973142&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fsuccess&response_type=token&scope=identify%20guilds'

const Home: FC = () => {

  return (
    <div className="py-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button text="Login" onClick={() => window.open(discordLink, "", "width=500, height=800") }/>
    </div>
  )
}


export default Home
