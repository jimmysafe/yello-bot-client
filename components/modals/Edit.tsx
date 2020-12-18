import { FC, SyntheticEvent, useRef, useState } from 'react'
import ButtonLoading from '../ButtonLoading'
import Button from '../Button'
import { useEditAudioMutation } from '../../graphql/generated'

type Props = {
    audio_name: string,
    audio_id: string,
    guild_id: string,
    refetchAudios: () => void,
    close: () => void
}

const Edit: FC<Props> = ({ audio_name, audio_id, guild_id, refetchAudios, close }) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const [editAudio, { loading }] = useEditAudioMutation()

    const handleEdit = async(e: SyntheticEvent) => {
        
        e.preventDefault()

        const new_audio_name: string = inputRef.current.value
        
        if(new_audio_name.length < 2) {
            setErrorMessage('A Command has to be of at least 2 characters')
            return
        }

        const invalidCharacters: RegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        
        if(invalidCharacters.test(new_audio_name)){
            setErrorMessage('File name CANNOT contain special characters / spaces')
            return
        }

        try {
            setErrorMessage('')
            await editAudio({ variables: { 
                audio_id, 
                audio_name, 
                guild_id,
                new_audio_name
            } })
            refetchAudios()
            close()
        } catch(err) {
            setErrorMessage(err.message)
        }
    }

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex justify-center items-center z-10">
            <form className="flex flex-col justify-center items-center bg-bgColor py-5 px-12 rounded" style={{ width: 500 }} onSubmit={handleEdit}>
                <p className="text-white mb-8 mt-5">Change command/audio name</p>
                <input 
                    ref={inputRef} 
                    type="text"
                    className="bg-secondary w-full px-5 py-3 mb-8 rounded text-white font-secondary focus:outline-none placeholder-textGrey" 
                    defaultValue={audio_name}
                />
                {errorMessage && <p className="text-white mb-4 break-all text-center"> {errorMessage} </p>}
                {loading ?
                    <ButtonLoading loader="/assets/loader.svg" disabled={true} />
                    :
                    <Button text="Confirm"/>
                }
                <div className="mt-5 text-white cursor-pointer" onClick={close}>
                    <span>Cancel</span>
                </div>
            </form>
        </div>
    )
}

export default Edit
