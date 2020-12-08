import { useEffect } from 'react'
import { setCookie } from 'nookies'

const SuccessAuth = () => {
    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        if (fragment.has("access_token")) {
            const accessToken = fragment.get("access_token");
            setCookie(null, "accessToken", accessToken, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/'
            } )
            window.opener.location.href = 'http://localhost:3000/app/servers'
            window.close()
        }

    }, [])    

    return (
        <div>
            success
        </div>
    )
}


export default SuccessAuth
