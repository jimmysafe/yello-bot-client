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
import PremiumBanner from '../../../components/PremiumBanner'
import Premium from '../../../components/modals/Premium'

type DashboardProps = {
    guild_id: string,
}

const Dashboard = ({ guild_id }: DashboardProps) => {
    const [showUpload, setShowUpload] = useState<boolean>(false)
    const [showSettings, setShowSettings] = useState<boolean>(false)
    const [showPremium, setShowPremium] = useState<boolean>(false)

    const { data: guildData, error: guildError, loading: guildLoading, refetch: refetchGuild } = useGuildQuery({ variables: { guild_id } })
    const { data, error, loading, refetch: refetchAudios } = useGetAudiosQuery({ variables: { guild_id } })

    if(guildError) return Error(guildError.graphQLErrors[0].extensions.code)
    if(error) return Error(error.graphQLErrors[0].extensions.code)

    if(loading || guildLoading) 
      return <Loading hScreen/>

    const isOwner = guildData.guild.owner === Cookies.get("userid")
 
    const cantUpload = guildData.guild.files.length >= 10 && guildData.guild.type === "BASIC"

    console.log(guildData)

    return (
        <div className="py-5 max-w-card mx-auto">
            {showSettings && <Settings prefix={guildData.guild.prefix} refetchGuild={refetchGuild} close={() => setShowSettings(false)} roles={guildData.guild.roles} guild_id={guild_id} />}
            {showUpload && <Upload guild_id={guild_id} close={() => setShowUpload(false)} refetchAudios={refetchAudios} refetchGuild={refetchGuild} />}
            {showPremium && <Premium guild_id={guildData.guild.guild_id} guild_name={guildData.guild.guild_name} close={() => {
              setShowPremium(false)
              refetchGuild()
            }}/>}
            <div className="flex justify-between items-center px-5 py-7 mb-5 rounded font-primary text-white bg-secondary">
              <div className="flex items-center">
                {guildData.guild.guild_icon ? 
                    <div className="h-icon w-icon bg-cover bg-center bg-no-repeat rounded-full" style={{ backgroundImage: `url(https://cdn.discordapp.com/icons/${guildData.guild.guild_id}/${guildData.guild.guild_icon}.png?size=64)` }} />
                    :
                    <div className="bg-primary h-icon w-icon rounded-full" />
                }
                <div className="ml-5 flex- flex-col">
                  <p className="font-primary text-white">{guildData.guild.guild_name}</p>
                  <p className="text-xs mt-2">
                    <span className="text-textGrey">Plan:</span> {guildData.guild.type}
                    {guildData.guild.type === 'BASIC' && 
                      <span className="ml-3 bg-primary py-1 px-2 font-secondary rounded text-secondary font-bold cursor-pointer" onClick={() => setShowPremium(true)}>Go Premium!</span>
                    }
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                {isOwner && <Button dark text="Settings" onClick={() => setShowSettings(true)} className="mr-5"/>}
                <Button blue text="Add New Audio" onClick={() => setShowUpload(true)} disabled={cantUpload}/>
              </div>
            </div>
            { cantUpload && <PremiumBanner setShowPremium={setShowPremium}/>}
            {!data.audios.length ? (
              <div className="bg-secondary bg-opacity-50 px-5 py-7 rounded flex flex-col items-center justify-center relative" style={{ minHeight: 200 }}>
                <img src="/assets/sleep.png" className="absolute" alt="Yello Audio" style={{ width: 150, bottom: 20, left: 20 }} />
                <p className="mb-5 text-white font-primary">There are no audios yet.</p>
                <Button blue text="Add New Audio" onClick={() => setShowUpload(true)} />
              </div>
            ) : (
              <>
                {data.audios.map((audio, i) => (
                  <Audio 
                    key={audio.id} 
                    guild_id={guild_id}
                    audio={audio} 
                    index={i} 
                    prefix={guildData.guild.prefix}
                    refetchAudios={refetchAudios}
                    refetchGuild={refetchGuild}
                  />
                ))}
              </>
            )}
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
