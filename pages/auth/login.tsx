import { GetServerSideProps, NextPage } from 'next'
import { redirect } from '../../utils'

type Props = {
    prev: string
}

const Login: NextPage<Props> = ({ prev }) => {
    return (
        <div>
            LoginPage
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
        
    return {
        props: {
            prev: context.query.prev || null
        }
    }
} 

export default Login
