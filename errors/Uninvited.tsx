import { FC } from "react"
import Button from '../components/Button'
import { FaDiscord as DiscordIcon } from 'react-icons/fa'


const Uninvited: FC = () => {
    return (
        <div className="w-full bg-bgColor md:pt-36 pt-20">
            <div className="container mx-auto h-full flex justify-between items-center md:flex-row flex-col">
                <div className="flex-1">
                    <img src="/assets/sleep.png" alt="Yello Logo" className="md:w-2/3 w-32 mx-auto ml-auto"/>
                </div>
                <div className="flex-1">
                    <div className="p-10 flex flex-col justify-center items-center">
                       <h1 className=" text-primary font-secondary md:text-8xl text-6xl text-center">Oops..</h1>
                       <div className="my-12 text-white font-secondary text-center">
                        <p className="font-medium text-md uppercase mb-3">LOOKS LIKE YELLO HAS NOT BEEN INVITED TO THIS SERVER YET.</p>
                        <p className="font-light text-sm">If you are the Discord Server owner, add YELLO to your server!</p>
                        <p className="font-light text-sm"> </p>
                       </div>
                        <Button 
                            blue
                            text="Invite to Discord" 
                            icon={ <DiscordIcon size={30} className="mr-3"/> }
                            onClick={() => {
                                window.open(
                                    'https://discord.com/oauth2/authorize?client_id=783637010819973142&scope=bot&permissions=8',
                                    '_blank'
                                  );
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uninvited
