import { useUserGuildsQuery } from '../../graphql/generated'
import { authorized } from '../../utils'
import { GetServerSideProps, NextPage  } from 'next'

type Cookie = {
    userid: string,
    expiry: string,
    accessToken: string
}

type PageProps = {
    cookies: Cookie[]
}

const Servers: NextPage<PageProps> = ({ cookies }) => {

    const { data, error, loading } = useUserGuildsQuery()

    if(error) console.log(error)
    if(loading) console.log(loading)
    console.log(data)


    return (
        <div>
            LIST OF PRIVATE SERVERS
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    return {
        props: {
            cookies: authorized(ctx) || null
        }
    }    
}

export default Servers
