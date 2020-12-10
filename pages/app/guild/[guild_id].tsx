import React from 'react'
import { GetServerSideProps } from 'next'
import { useGetAudiosQuery } from '../../../graphql/generated'
import Audio from '../../../components/Audio'
import Error from '../../../errors'

type DashboardProps = {
    guild_id: string,
}

const Dashboard = ({ guild_id }: DashboardProps) => {
    const { data, error, loading } = useGetAudiosQuery({ variables: { guild_id } })

    if(error) 
      return Error(error.graphQLErrors[0].extensions.code)
    if(loading) 
      return <p>Loading..</p>
  

    return (
        <div>
            {data.audios.map(audio => <Audio key={audio.id} audio={audio}/>)}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const guild_id = query.guild_id

    return {
        props: {
          guild_id        
        }
    }
  }

export default Dashboard
