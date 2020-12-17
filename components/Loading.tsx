import { FC } from 'react'

const Loading: FC = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-bgColor">
            <div className="p-3 rounded flex justify-center items-center bg-primary">
                <img src="/assets/loader.svg" alt="Loading"/>
            </div>
        </div>
    )
}

export default Loading
