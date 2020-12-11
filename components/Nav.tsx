import React, { FC, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { NextRouter, useRouter } from 'next/router'
import Button from './Button'


const token: string = Cookies.get('accessToken')
const username: string = Cookies.get('username')
const avatar: string = Cookies.get('avatar')
const userid: string = Cookies.get('userid') 

const links = [
    { name: 'Contact', path: '/contact', private: false },
    { name: 'Commands', path: '/commands', private: false },
    { name: 'My Servers', path: '/app/servers', private: true },
    { name: username, path: null, private: true, avatar: true }
]

const Nav: FC = () => {
    const router: NextRouter = useRouter()
    const discordLink: string = 'https://discord.com/api/oauth2/authorize?client_id=783637010819973142&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fsuccess&response_type=token&scope=identify%20guilds'

    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        if(token && username && avatar && userid) setLoggedIn(true)
    }, [])

    console.log(loggedIn)

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
        <header className="py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div>
                    <img src="/assets/logo.png" className="w-icon" alt="Yello Logo"/>
                </div>
                <div className="flex justify-between items-center">
                    {links.map((link, i) => {
                        if(!loggedIn && link.private) return null
                        return (
                            <div 
                                key={i} 
                                className="mx-5 cursor-pointer flex items-center" 
                                onClick={ () => link.path ? router.push(link.path) : null }
                            >
                                <span className="text-white font-primary">{link.name}</span>
                                {link.avatar &&
                                    <div 
                                        className="ml-3 bg-cover bg-center bg-no-repeat rounded-full" 
                                        style={{ 
                                            backgroundImage: `url(https://cdn.discordapp.com/avatars/${userid}/${avatar}.png?size=32)`,
                                            height: 32,
                                            width: 32
                                        }} 
                                    />
                                }
                            </div>
                        )
                    })}


                    {!loggedIn && <Button onClick={() => openPopup(discordLink, 500, 800)} text="Login"/>}
                    
                </div>
            </nav>
        </header>
    )
}

export default Nav
