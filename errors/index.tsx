import { NextRouter, useRouter } from "next/router"
import Cookies from 'js-cookie'

const UNAUTHENTICATED: string = 'UNAUTHENTICATED'
const UNINVITED: string = 'UNINVITED'
const NOT_EXISTING_ROLE: string = 'NOT_EXISTING_ROLE'
const INVALID_ROLE: string = 'INVALID_ROLE'


const Error = (errorCode : string) => {
    const router: NextRouter = useRouter()
    switch(errorCode){
        case UNAUTHENTICATED:
            Cookies.remove('userid')
            Cookies.remove('expiry')
            Cookies.remove('accessToken')
            Cookies.remove('username')
            Cookies.remove('avatar')
            router.push('/auth/login')
            return <></>
        case UNINVITED:
            return <h1>UNINVITED</h1>
        case NOT_EXISTING_ROLE:
            return <h1>NOT_EXISTING_ROLE</h1>
        case INVALID_ROLE:
            return <h1>INVALID_ROLE</h1>
        default:
            return <h1>UNHANDLED ERROR</h1>
}
}

export default Error