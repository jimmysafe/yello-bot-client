import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useGetAudiosQuery } from '../../../graphql/generated'
import Audio from '../../../components/Audio'
import Error from '../../../errors'
import Button from '../../../components/Button'
import Upload from '../../../components/Upload'
import { authorized } from '../../../utils'
import Loading from '../../../components/Loading'

type DashboardProps = {
    guild_id: string,
}

const Dashboard = ({ guild_id }: DashboardProps) => {
    const [showUpload, setShowUpload] = useState<boolean>(false)

    const { data, error, loading, refetch } = useGetAudiosQuery({ variables: { guild_id } })

    if(error) 
      return Error(error.graphQLErrors[0].extensions.code)
    if(loading) 
      return <Loading />

    return (
        <div className="py-5 max-w-card mx-auto">
            {showUpload && <Upload guild_id={guild_id} close={() => setShowUpload(false)} refetchAudios={refetch}/>}
            <div className="flex justify-between items-center px-5 py-7 mb-5 rounded font-primary text-white bg-secondary">
              <span>Server Audios</span>
              <Button text="New Audio" onClick={() => setShowUpload(true)}/>
            </div>
            {data.audios.map((audio, i) => <Audio key={audio.id} audio={audio} index={i}/>)}
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
