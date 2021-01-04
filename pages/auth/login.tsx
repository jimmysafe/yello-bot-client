import { NextPage } from 'next'
import Button from '../../components/Button'
import { FaDiscord as DiscordIcon } from 'react-icons/fa'
import { openDiscordLoginPopup } from '../../utils'

type Props = {
    prev: string
}

const Login: NextPage<Props> = () => {
    return (
        <div className="w-full bg-bgColor md:pt-36 pt-20">
            <div className="container mx-auto h-full flex justify-between items-center md:flex-row flex-col">
                <div className="flex-1">
                    <img src="/assets/hello.png" alt="Yello Logo" className="md:w-2/3 w-32 mx-auto ml-auto"/>
                </div>
                <div className="flex-1">
                    <div className="p-10 flex flex-col justify-center items-center">
                       <h1 className=" text-primary font-secondary md:text-8xl text-6xl text-center">Welcome<br/> to Yello!</h1>
                       <p className="my-12 text-white font-secondary font-medium text-md uppercase text-center">
                        please login with discord to proceed..
                       </p>
                        <Button 
                            blue
                            text="Login with Discord" 
                            icon={ <DiscordIcon size={30} className="mr-3"/> }
                            onClick={() => openDiscordLoginPopup()}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login
