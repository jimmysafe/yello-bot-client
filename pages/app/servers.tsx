import { useUserGuildsQuery } from '../../graphql/generated'
import { authorized } from '../../utils'
import { GetServerSideProps, NextPage  } from 'next'
import { NextRouter, useRouter } from 'next/router'

type Cookies = {
    userid: string,
    expiry: string,
    accessToken: string,
    avatar: string | null,
    username: string
}

type PageProps = {
    cookies: Cookies
}

const Servers: NextPage<PageProps> = () => {

    const router: NextRouter = useRouter()

    const { data, error, loading } = useUserGuildsQuery()

    if(error) console.log(error)
    if(loading) console.log(loading)
    
    return (
        <div>
            {data?.userGuilds.map(guild => (
                <div key={guild.id} className="flex justify-between items-center shadow p-5 mb-5 cursor-pointer" onClick={() => router.push(`/app/guild/${guild.id}`)}>
                    {guild.icon ? 
                        <img src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=64`} alt={guild.name}/>
                        :
                        <div className="bg-red-600" style={{ height: 64, width: 64 }}></div>
                    }
                    <p>{guild.name}</p>
                </div>
            ))}
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
