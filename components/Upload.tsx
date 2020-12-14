import { FC, useState } from 'react'
import VideoEditor from './VideoEditor'
import Button from './Button'
import ButtonLoading from './ButtonLoading'
import { IoIosClose as ClearIcon } from 'react-icons/io'
import { useAddAudioMutation } from '../graphql/generated'
import { YouTubeGetID } from '../utils';

type TimeValues = {
    values: number[]
}

type Props = {
    close: () => void,
    guild_id: string,
    refetchAudios: () => void
}

const Upload: FC<Props> = ({ close, guild_id, refetchAudios }) => {

    const [addAudio, { data, loading, error }] = useAddAudioMutation()

    const [url, setUrl] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
 
    const [time, setTime] = useState<TimeValues>({
        values: [0, 0]
    });

    const allowedLength = (time.values[1] - time.values[0]) < 10

    const invalidCharacters: RegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    const upload = async(e: any) => {
        e.preventDefault()
        // Check if video is valid
        if(time.values[0] === 0 && time.values[1] === 0){
            setErrorMessage('Error: Invalid Youtube video url.')
            return
        }
        // Check if file name is valid
        if(invalidCharacters.test(name)){
            setErrorMessage('File name CANNOT contain special characters / spaces')
            return
        }

        setErrorMessage('')
        try {
            await addAudio({ variables: {
                audioUrl: url,
                guild_id,
                name,
                start: time.values[0],
                end: time.values[1]
            } })
            setErrorMessage('')
            refetchAudios()
            close()
        } catch(err) {
            console.log(err)
            setErrorMessage(err.message)
        }
    }

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex justify-center items-center z-10">
            <form className="flex flex-col justify-center items-center bg-bgColor py-5 px-12 rounded" onSubmit={upload}>
                <h1 className="text-white text-xl font-secondary mb-8">Upload from Youtube url</h1>
                <div className="w-full relative">
                    <input 
                        type="text" 
                        value={url} 
                        className={`bg-secondary w-full px-5 py-3 mb-3 rounded ${!!url && 'cursor-not-allowed'} text-white font-secondary focus:outline-none placeholder-textGrey `} 
                        placeholder="Paste Youtube link here" 
                        onChange={(e) => {
                            const videoId = YouTubeGetID(e.target.value)
                            const formattedUrl = `https://www.youtube.com/watch?v=${videoId}`
                            setUrl(formattedUrl)
                        }} 
                        readOnly={!!url}
                        required
                    />
                    {url && 
                        <div 
                            className="absolute rounded bg-primary cursor-pointer" 
                            onClick={ () => setUrl('') }
                            style={{
                                top: 9,
                                right: 9
                            }}
                        >
                            <ClearIcon color="white" size={30} />
                        </div>
                    }
                </div>
                <div className="w-full">
                    <input 
                        required
                        type="text" 
                        value={name}
                        className="bg-secondary w-full px-5 py-3 mb-3 rounded  text-white font-secondary focus:outline-none placeholder-textGrey" 
                        placeholder="File/command name" 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                
                <VideoEditor time={time} setTime={setTime} url={url} />

                {url &&
                    <>
                        <div className="my-3 h-5">
                            <p className="text-white font-secondary text-sm">
                                {!allowedLength ?  'Audio can be max 10 seconds.' : ' '}
                                {errorMessage && errorMessage}
                            </p>
                        </div>
                        
                        {loading ?
                            <ButtonLoading loader="/assets/loader.svg" disabled={true} />
                            : <Button text="Upload" disabled={!allowedLength} />
                        }
                    </>
                }
                <div className="mt-3 cursor-pointer" onClick={close}>
                    <p className="text-sm text-white font-secondary font-medium">Cancel</p>
                </div>
            </form>
        </div>
    )
}

export default Upload
