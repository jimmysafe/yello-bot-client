import { FC } from 'react'
import Button from '../Button'

type Props = {
    close: () => void
}

const Success: FC<Props> = ({ close }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-secondary font-secondary flex flex-col justify-center items-center px-10" style={{ zIndex: 1000 }}>
            <img src="/assets/success.png" className="w-28 mx-auto mb-8" alt="Yello Logo"/>
            <h1 className="text-5xl text-primary font-medium text-center">THANKS!</h1>
            <div className="text-white text-sm my-8 text-center">
                <p>Thanks for upgrading to Premium!</p>
                <p>You can now upload unlimited audios!</p>
            </div>
            <Button blue text="Close" className="w-full" onClick={close}/>
        </div>
    )
}

export default Success
