import { useEffect } from 'react'
import Cookies from 'js-cookie'
import moment from 'moment';
import { BiCheck as Check } from 'react-icons/bi'


const SuccessAuth = () => {
    useEffect(() => {
        const fragment: URLSearchParams = new URLSearchParams(window.location.hash.slice(1));
        if (fragment.has("access_token")) {
            
            const accessToken: string = fragment.get("access_token");
            
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            })
            .then( res => res.json() )
            .then( user => {
                const userid: string = user.id
                const avatar: string = user.avatar
                const username: string = user.username
                const expiry: number = Number(fragment.get("expires_in"))

                let expiryDate: Date = new Date()
                expiryDate = new Date(expiryDate.getTime() + (expiry * 1000));

                const expiryDateISO: string = moment(expiryDate).utcOffset(0).format()

                Cookies.set('userid', userid, { expires: 7 })
                Cookies.set('expiry', expiryDateISO, { expires: 7 })
                Cookies.set('accessToken', accessToken, { expires: 7 })
                Cookies.set('username', username, { expires: 7 })
                Cookies.set('avatar', avatar, { expires: 7 })


                window.opener.location.href = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/app/servers' : 'https://yellobot.me/app/servers'
                window.close()
            } )
            .catch( err => console.log(err) )
        }
    }, [])    

    return (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-bgColor z-10">
            <Check color="#FFB300" size={50}/>
        </div>
    )
}


export default SuccessAuth
