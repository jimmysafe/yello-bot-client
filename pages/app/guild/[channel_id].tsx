import React from 'react'
import { GetServerSideProps } from 'next'
import { useGetChannelAudiosQuery, useUserRoleQuery } from '../../../graphql/generated'
import Audio from '../../../components/Audio'

type DashboardProps = {
    channel_id: string,
}

const Dashboard = ({ channel_id }: DashboardProps) => {
    const { data: user, error: userError, loading: userLoading } = useUserRoleQuery({ variables: { channel_id } })
    const { data, error, loading } = useGetChannelAudiosQuery({ variables: { channel_id } })

    if(userError) {
        console.log(userError.message, userError.graphQLErrors[0].extensions.code )
        // redirect to not invited yet page if code is INVALID_ROLE
        return <p>User Error..</p>
      }

    if(error) {
      console.log(error.message, error.graphQLErrors[0].extensions.code )
      // redirect to not invited yet page if code is UNINVITED
      return <p>Error..</p>
    }
  
    
    if(loading || userLoading) {
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

    return {
        props: {
            channel_id        
        }
    }
  }

export default Dashboard
