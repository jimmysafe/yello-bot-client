import { FC } from 'react'
import ButtonLoading from '../ButtonLoading'
import Button from '../Button'
import { useDeleteAudioMutation } from '../../graphql/generated'

type Props = {
    audio_name: string,
    audio_id: string,
    guild_id: string,
    refetchAudios: () => void,
    refetchGuild: () => void,
    close: () => void
}

const Delete: FC<Props> = ({ audio_name, audio_id, guild_id, refetchAudios, refetchGuild, close }) => {

    const [deleteAudio, { loading, error }] = useDeleteAudioMutation()

    const handleDelete = async() => {
        try {
            await deleteAudio({ variables: { audio_id, audio_name, guild_id } })
            refetchGuild()
            refetchAudios()
            close()
        } catch(err) {
            console.log(err)
            console.log(error)
        }
    }

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex justify-center items-center z-10">
            <div className="flex flex-col justify-center items-center bg-bgColor py-5 px-12 rounded">
                <p className="text-white mb-8 mt-5">Do you really want to delete this file?</p>
                {loading ?
                    <ButtonLoading loader="/assets/loader.svg" disabled={true} />
                    :
                    <Button text="Confirm" onClick={() => handleDelete()}/>
                }
                <div className="mt-5 text-white cursor-pointer" onClick={close}>
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    )
}

export default Delete
