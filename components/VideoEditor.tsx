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

    const video = useRef<ReactPlayer>(null);

    const [playing, setPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);

    return (
        <div>
            <div className="video-player-wrapper bg-secondary p-3 rounded mb-3 relative">
                {/* Play button layer */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center" onClick={() => setPlaying(!playing)} >
                    {!playing && <PlayIcon color="#FFB300"  className="h-32 w-32 md:w-96 md:h-96" />}
                </div>
                <ReactPlayer
                    playing={playing}
                    ref={video}
                    width="100%"
                    height="100%"
                    volume={0.5}
                    url={url}
                    progressInterval={100}
                    onReady={() => {
                        setDuration(video.current.getDuration());
                        setTime({
                            values: [time.values[0], video.current.getDuration()]
                        });
                    }}
                    onProgress={(x) => {
                        const start: number = time.values[0];
                        const end: number = time.values[1];
                        const currentTime: number = x.playedSeconds;

                        setCurrentVideoTime(currentTime);

                        if (currentTime >= end || currentTime < start) {
                            video.current.seekTo(start);
                        }
                    }}
                />
            </div>


            {duration && url &&  (
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
                            renderTrack={({ props, children, isDragged }) => <Track children={children} props={props} time={time} duration={duration} isDragged={isDragged} playing={playing} setPlaying={setPlaying} /> }
                            onChange={(values) => {
                                if(playing) setPlaying(false);
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
