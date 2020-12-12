import { FC, useRef, useState, SetStateAction, Dispatch, useEffect } from 'react'
import ReactPlayer from "react-player/lazy";
import { Range } from "react-range";
import moment from "moment";
import Track from './slider/Track';
import Thumb from './slider/Thumb';
import { BsFillPlayFill as PlayIcon, BsFillPauseFill as PauseIcon } from 'react-icons/bs'


type TimeValues = {
    values: number[]
}


type Props = {
    time: TimeValues,
    setTime: Dispatch<SetStateAction<TimeValues>>,
    url: string
}

const VideoEditor: FC<Props> = ({ time, setTime, url }) => {

    const video = useRef(null);

    const [playing, setPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);

    useEffect(() => console.log('new url!'), [url])

    return (
        <div>
             <div className="bg-secondary p-3 rounded mb-3">
                <ReactPlayer
                    playing={playing}
                    ref={video}
                    volume={0.1}
                    url={url}
                    onReady={() => {
                        setDuration(video.current.getDuration());
                        setTime({
                            values: [time.values[0], video.current.getDuration()]
                        });
                    }}
                    onProgress={() => {
                        const start = time.values[0];
                        const end = time.values[1];
                        const currentTime = video.current.getCurrentTime().toFixed(2);

                        setCurrentVideoTime(video.current.getCurrentTime().toFixed(2));

                        if (currentTime >= end || currentTime < start) {
                            video.current.seekTo(start);
                        }
                    }}
                />
            </div>

            {duration && (
                <div className="bg-secondary p-3 rounded mb-3 flex items-center">
                    <p className="text-white font-primary text-xs">{moment().startOf("day").seconds(currentVideoTime).format("H:mm:ss")}</p>
                    <div className="mx-5 cursor-pointer">
                        {playing ? 
                            <PauseIcon color="#FFB300" size={30} onClick={() => setPlaying(false)} /> 
                            : 
                            <PlayIcon color="#FFB300" size={30}  onClick={() => setPlaying(true)} />
                        }
                    </div>
                    <div className="flex-1">
                        <Range
                            step={0.01}
                            min={0}
                            max={duration}
                            values={time.values}
                            renderThumb={({ props, index }) => <Thumb key={index} props={props} index={index} time={time}/>}
                            renderTrack={({ props, children, isDragged }) => {
                                if (isDragged) setPlaying(false);
                                // else setPlaying(true);
                                return <Track children={children} props={props} time={time} duration={duration} />
                            }}
                            onChange={(values) => {
                                setPlaying(false);
                                setTime({ values });
                                video.current.seekTo(values[0]);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoEditor
