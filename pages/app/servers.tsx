import { useUserGuildsQuery } from '../../graphql/generated'
import { authorized } from '../../utils'
import { GetServerSideProps, NextPage  } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { FiArrowRight as Arrow } from "react-icons/fi";
import Error from '../../errors'
import Loading from '../../components/Loading';

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

    if(error)  return Error(error.graphQLErrors[0].extensions.code)
    if(loading) return <Loading hScreen/>

    return (
        <div className="py-5">
            <h1 className="text-center mb-24 font-secondary text-xl text-white font-medium">Choose a server</h1>
            {data?.userGuilds.map(guild => (
                <div 
                    key={guild.id} 
                    className="group flex max-w-card mx-auto justify-between items-center p-5 mb-5 cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out rounded" 
                    onClick={() => router.push(`/app/guild/${guild.id}`)}
                >
                    <div className="flex items-center">
                        {guild.icon ? 
                            <div className="h-icon w-icon bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=64)` }} />
                            :
                            <div className="bg-primary h-icon w-icon rounded-full" />
                        }
                        <p className="ml-12 font-primary text-white">{guild.name}</p>
                    </div>
                    <div className="opacity-0 bg-secondary rounded p-3 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <Arrow color="rgb(255, 179, 0)" size={30}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
    authorized(ctx)
    return { props: {} }    
}

export default Servers
