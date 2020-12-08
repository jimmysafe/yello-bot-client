import React, { FC } from 'react'

type Props = {
    audio: AudioProps
}

type AudioProps = {
    id: string
    name: string
    url: string
}

const Audio: FC<Props> = ({ audio }) => {
    return (
        <div className="flex justify-between items-center p-5">
            <div>{audio.name}</div>
            <audio controls>
                <source src={audio.url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default Audio
