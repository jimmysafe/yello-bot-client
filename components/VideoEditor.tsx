import { FC, useRef, useState } from 'react'
import ReactPlayer from "react-player/lazy";
import { Range } from "react-range";
import moment from "moment";
import Track from './slider/Track';
import Thumb from './slider/Thumb';

type SliderValues = {
    values: number[]
}

const VideoEditor: FC = () => {

    const [playing, setPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentVideoTime, setCurrentVideoTime] = useState<number>(0);
    const [slider, setSlider] = useState<SliderValues>({
      values: [0, 0]
    });

    const video = useRef(null);

    console.log(slider.values)


    return (
        <div>
            <ReactPlayer
                playing={playing}
                ref={video}
                volume={0.1}
                url="https://www.youtube.com/watch?v=f1jkAwQZ1_A"
                onReady={() => {
                    setDuration(video.current.getDuration());
                    setSlider({
                        values: [slider.values[0], video.current.getDuration()]
                    });
                }}
                onProgress={() => {
                    const start = slider.values[0];
                    const end = slider.values[1];
                    const currentTime = video.current.getCurrentTime().toFixed(2);

                    setCurrentVideoTime(video.current.getCurrentTime().toFixed(2));

                    if (currentTime >= end || currentTime < start) {
                        video.current.seekTo(start);
                    }
                }}
            />

            {duration && (
                <p>
                {moment().startOf("day").seconds(currentVideoTime).format("H:mm:ss")}
                </p>
            )}

            {duration && (
                <Range
                    step={0.01}
                    min={0}
                    max={duration}
                    values={slider.values}
                    renderThumb={({ props, index }) => <Thumb key={index} props={props} index={index} slider={slider}/>}
                    renderTrack={({ props, children, isDragged }) => {
                        if (isDragged) setPlaying(false);
                        else setPlaying(true);
                        return <Track children={children} props={props} slider={slider} duration={duration} />
                    }}
                    onChange={(values) => {
                        setPlaying(false);
                        setSlider({ values });
                        video.current.seekTo(values[0]);
                    }}
                />
            )}

            <button onClick={() => setPlaying(!playing)}>Play/Pause</button>
        </div>
    )
}

export default VideoEditor
