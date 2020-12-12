import { FC, useRef, useState } from 'react'
import VideoEditor from './VideoEditor'
import Button from './Button'

type TimeValues = {
    values: number[]
}

const Upload: FC = () => {

    const url = useRef<HTMLInputElement>(null)
    const name = useRef<HTMLInputElement>(null)

    const [time, setTime] = useState<TimeValues>({
        values: [0, 0]
    });

    return (
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-screen flex justify-center items-center">
            <section className="flex flex-col justify-center items-center bg-bgColor py-5 px-12 rounded">
                <h1 className="text-white text-xl font-secondary mb-8">Upload from Youtube url</h1>
                <input ref={url} type="text" className="bg-secondary w-full px-5 py-3 mb-3 rounded" placeholder="Youtube url"/>
                <input ref={name} type="text" className="bg-secondary w-full px-5 py-3 mb-3 rounded" placeholder="File/command name"/>
                
                <VideoEditor time={time} setTime={setTime} url={url.toString()} />
            
                <Button text="Upload" onClick={() => console.log(time.values)}/>
            </section>
        </div>
    )
}

export default Upload
