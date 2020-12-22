import { useEffect } from 'react'
import { BiCheck as Check } from 'react-icons/bi'

const SuccessAuth = () => {
    useEffect(() => {
        window.opener.location.href = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/app/servers' : 'https://yellobot.me/app/servers'
        window.close()
    }, [])    

    return (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-bgColor z-10">
            <Check color="#FFB300" size={50}/>
        </div>
    )
}


export default SuccessAuth
