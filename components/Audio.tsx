import React, { FC } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillPlayFill as PlayIcon, BsFillPauseFill as PauseIcon } from 'react-icons/bs'

type Props = {
    audio: AudioProps,
    index: number
}

type AudioProps = {
    id: string
    name: string
    url: string,
}

const Audio: FC<Props> = ({ audio, index }) => {
    return (
        <div className={`flex justify-between items-center px-5 py-7 font-secondary text-white bg-secondary ${index % 2 ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
            <div>!{audio.name}</div>
            <AudioPlayer
                volume={0.6}
                src={audio.url}
                showJumpControls={false}
                showFilledVolume={false}
                layout="horizontal-reverse"
                customIcons={{
                    play: <PlayIcon color="white" size={30}/>,
                    pause: <PauseIcon color="white" size={30} />
                }}
            />
        </div>
    )
}

export default Audio
