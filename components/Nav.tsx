import { FC } from 'react'
import { NextRouter, useRouter } from 'next/router'
import Button from './Button'
import { openDiscordLoginPopup } from '../utils' 
import { useGetUserQuery, useLogoutMutation } from '../graphql/generated'


const links = [
    { name: 'My Servers', path: '/app/servers', private: true },
]

const Nav: FC = () => {

    const { data } = useGetUserQuery()
    const [logoutUser] = useLogoutMutation()

    const router: NextRouter = useRouter()

    const logout = async() => {
        await logoutUser()
        window.location.reload()
    }

    return (
        <header className="py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
                    <img src="/assets/logo.png" className="w-icon" alt="Yello Logo"/>
                    <span className="font-secondary text-primary font-medium text-md ml-3 uppercase">yello</span>
                </div>
                <div className="flex justify-between items-center">
                    {links.map((link, i) => {
                        if(!data && link.private) return null
                        return (
                            <div 
                                key={i} 
                                className="mx-5 cursor-pointer flex items-center relative" 
                                onClick={ () =>  router.push(link.path) }
                            >
                                <span className="text-white font-primary">{link.name}</span>
                            </div>
                        )
                    })}

                    {data &&
                        <>
                            <div className="mx-5 flex items-center relative" >
                                <span className="text-white font-primary">{data.user.username}</span>
                            </div>
                            <div 
                                className="ml-3 bg-cover bg-center bg-no-repeat rounded-full" 
                                style={{ 
                                    backgroundImage: `url(https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png?size=32)`,
                                    height: 32,
                                    width: 32
                                }} 
                            />
                            <div className="mx-5 flex cursor-pointer items-center relative" onClick={() => logout()} >
                                <span className="text-tertiary font-primary">Logout</span>
                            </div>
                        </>
                    }

                    {!data && <Button blue onClick={() => openDiscordLoginPopup()} text="Login"/>}
                    
                </div>
            </nav>
        </header>
    )
}

export default Nav
