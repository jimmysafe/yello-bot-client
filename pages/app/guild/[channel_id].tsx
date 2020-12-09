import React from 'react'
import { GetServerSideProps } from 'next'
import { useGetChannelAudiosQuery } from '../../../graphql/generated'
import Audio from '../../../components/Audio'

type DashboardProps = {
    channel_id: string,
}

const Dashboard = ({ channel_id }: DashboardProps) => {

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

    return {
        props: {
            channel_id        
        }
    }
  }

export default Dashboard
