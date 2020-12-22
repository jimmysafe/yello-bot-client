import { NextRouter, useRouter } from "next/router"
import InvalidRole from "./InvalidRole"
import Uninvited from "./Uninvited"

const UNAUTHENTICATED: string = 'UNAUTHENTICATED'
const UNINVITED: string = 'UNINVITED'
const INVALID_ROLE: string = 'INVALID_ROLE'

const Error = (errorCode : string) => {
    const router: NextRouter = useRouter()
    switch(errorCode){
        case UNAUTHENTICATED:
            router.push('/auth/login')
        case UNINVITED:
            return <Uninvited />
        case INVALID_ROLE:
            return <InvalidRole />
        default:
            return <h1>UNHANDLED ERROR</h1>
}
}

export default Error