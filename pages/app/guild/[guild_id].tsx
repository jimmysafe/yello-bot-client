import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useGetAudiosQuery, useGuildQuery } from '../../../graphql/generated'
import Audio from '../../../components/Audio'
import Error from '../../../errors'
import Button from '../../../components/Button'
import Upload from '../../../components/modals/Upload'
import { authorized } from '../../../utils'
import Loading from '../../../components/Loading'
import Cookies from 'js-cookie'
import Settings from '../../../components/modals/Settings'

type DashboardProps = {
    guild_id: string,
}

const Dashboard = ({ guild_id }: DashboardProps) => {
    const [showUpload, setShowUpload] = useState<boolean>(false)
    const [showSettings, setShowSettings] = useState<boolean>(false)

    const { data: guildData, error: guildError, loading: guildLoading, refetch: refetchGuild } = useGuildQuery({ variables: { guild_id } })
    const { data, error, loading, refetch } = useGetAudiosQuery({ variables: { guild_id } })

    if(error || guildError) 
      return Error(error.graphQLErrors[0].extensions.code)
    if(loading || guildLoading) 
      return <Loading />

    const isOwner = guildData.guild.owner === Cookies.get("userid")
 
    return (
        <div className="py-5 max-w-card mx-auto">
            {showSettings && <Settings prefix={guildData.guild.prefix} refetchGuild={refetchGuild} close={() => setShowSettings(false)} roles={guildData.guild.roles} guild_id={guild_id} />}
            {showUpload && <Upload guild_id={guild_id} close={() => setShowUpload(false)} refetchAudios={refetch}/>}
            <div className="flex justify-between items-center px-5 py-7 mb-5 rounded font-primary text-white bg-secondary">
              <span>Server Audios</span>
              <div className="flex items-center">
                {isOwner && <Button text="Settings" onClick={() => setShowSettings(true)} className="mr-5"/>}
                <Button text="New Audio" onClick={() => setShowUpload(true)}/>
              </div>
            </div>
            {data.audios.map((audio, i) => (
              <Audio 
                key={audio.id} 
                guild_id={guild_id}
                audio={audio} 
                index={i} 
                prefix={guildData.guild.prefix}
                refetchAudios={refetch}
              />
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
    authorized(ctx)

    const guild_id = ctx.query.guild_id
    return {
        props: {
          guild_id        
        }
    }
  }

export default Dashboard
