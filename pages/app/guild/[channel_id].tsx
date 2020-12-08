import React from 'react'
import { GetServerSideProps } from 'next'
import { useGetChannelAudiosQuery } from '../../../graphql/generated'
import Audio from '../../../components/Audio'
import { getGuildRoles, getGuildUser } from '../../../discord-api'

type DashboardProps = {
    channel_id: string,
    invalidRole: boolean
}

const Dashboard = ({ channel_id, invalidRole }: DashboardProps) => {

    console.log('invalid role: ', invalidRole)

    const { data, error, loading } = useGetChannelAudiosQuery({ variables: { channel_id } })

    if(error) {
      console.log(error)
      return <p>Error..</p>
    }
  
    
    if(loading) {
      console.log(loading)
      return <p>Loading..</p>
    }
  
    console.log(data)

    return (
        <div>
            {data.audios.map(audio => <Audio key={audio.id} audio={audio}/>)}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const channel_id = query.channel_id

    const userId = '387722413351370777'
    
    let invalidRole: boolean = true

    const roles = await getGuildRoles(channel_id)

    const yelloRole = roles.find(role => role.name === 'Yello Bot Moderator')
    if(!yelloRole) {
        console.log('You have to add the Yello Bot Moderator Role to your discord server')
    } else {
        const user = await getGuildUser(channel_id, userId)
        if(user.roles.includes(yelloRole.id)) {
            invalidRole = false
        } else {
            invalidRole = true
        }
    }

    return {
        props: {
            channel_id,
            invalidRole
        }
    }
  }

export default Dashboard
