import React, { FC, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsFillPlayFill as PlayIcon, BsFillPauseFill as PauseIcon } from 'react-icons/bs'
import { MdDelete as DeleteIcon } from 'react-icons/md'
import { AiTwotoneEdit as EditIcon } from 'react-icons/ai'
import Delete from './modals/Delete'
import Edit from './modals/Edit';

type Props = {
    audio: AudioProps,
    index: number,
    prefix: string,
    guild_id: string,
    refetchAudios: () => void,
    refetchGuild: () => void
}

type AudioProps = {
    id: string
    name: string
    url: string,
}

const Audio: FC<Props> = ({ audio, index, prefix, guild_id, refetchAudios, refetchGuild }) => {

    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    return (
        <>
        {isDeleting && <Delete audio_id={audio.id} guild_id={guild_id} audio_name={audio.name} refetchAudios={refetchAudios} refetchGuild={refetchGuild} close={() => setIsDeleting(false)}/>}
        {isEditing && <Edit audio_id={audio.id} guild_id={guild_id} audio_name={audio.name} refetchAudios={refetchAudios} refetchGuild={refetchGuild} close={() => setIsEditing(false)}/>}
        <div className={`flex justify-between items-center px-5 py-7 font-secondary text-white bg-secondary ${index % 2 ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
            <div className="md:mr-0 mr-10">{prefix}{audio.name}</div>
            <div className="flex items-center flex-1 justify-end">
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
            <DeleteIcon
                size={25} 
                className="ml-5 cursor-pointer hover:text-primary transition-all duration-200" 
                onClick={() => setIsDeleting(true)}
            />
            <EditIcon 
                size={25} 
                className="ml-2 cursor-pointer  hover:text-primary transition-all duration-200" 
                onClick={() => setIsEditing(true)}
            />
            </div>
        </div>
        </>
    )
}

export default Audio
