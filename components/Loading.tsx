import { FC } from 'react'

type Props = {
    hScreen?: boolean
}

const Loading: FC<Props> = ({ hScreen }) => {
    return (
        <div className={`absolute top-0 left-0 w-full flex justify-center items-center bg-bgColor ${hScreen ? 'h-screen' : 'h-full'}`} style={{ zIndex: 1000 }}>
            <div className="p-3 rounded flex justify-center items-center bg-primary">
                <img src="/assets/loader.svg" alt="Loading"/>
            </div>
        </div>
    )
}

export default Loading
