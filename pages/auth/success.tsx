import { useEffect } from 'react'
import Cookies from 'js-cookie'

const SuccessAuth = () => {
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        if (fragment.has("access_token")) {
            
            const accessToken = fragment.get("access_token");
            
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            })
            .then( res => res.json() )
            .then( user => {
                const userid = user.id
                const expiry = fragment.get("expires_in")

                Cookies.set('userid', userid, { expires: 7 })
                Cookies.set('expiry', expiry, { expires: 7 })
                Cookies.set('accessToken', accessToken, { expires: 7 })

                window.opener.location.href = 'http://localhost:3000/app/servers'
                window.close()
            } )
            .catch( err => console.log(err) )
        }
    }, [])    

    return (
        <div>
            success
        </div>
    )
}


export default SuccessAuth
