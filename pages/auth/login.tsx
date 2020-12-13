import { NextPage } from 'next'
import Button from '../../components/Button'
import { FaDiscord as DiscordIcon } from 'react-icons/fa'
import { openDiscordLoginPopup } from '../../utils'

type Props = {
    prev: string
}

const Login: NextPage<Props> = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-bgColor flex justify-center items-center flex-col">
            <img src="/assets/logo.png" alt="Yello Logo" className="w-32 mb-12"/>
            <div className="mb-12 text-white text-center">
                <h1 className="font-primary font-bold text-xl mb-3">Welcome to Yello's website</h1>
                <h3 className="font-primary text-lg">Please login to proceed...</h3>
            </div>
            <Button 
                text="Login with Discord" 
                icon={ <DiscordIcon size={30} className="mr-3"/> }
                onClick={() => openDiscordLoginPopup()}
            />
        </div>
    )
}


export default Login
