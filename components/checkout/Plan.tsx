import { FC, Dispatch, SetStateAction } from 'react'
import { BsCheck as Check } from 'react-icons/bs'
import Button from '../Button'

type Props = {
    setPage: Dispatch<SetStateAction<number>>
}

const Plan: FC<Props> = ({ setPage }) => {
    return (
        <>
            <div className="rounded-full h-20 w-20 bg-bgColor flex justify-center items-center mb-5">
                <img src="/assets/logo.png" className="w-14" alt="Yello Logo"/>
            </div>
            <div className="py-5 px-10 rounded bg-bgColor flex flex-col justify-center items-center text-center text-white font-secondary">
                <p>Lifetime Plan</p>
                <p className="my-5 text-6xl font-bold">€4.99</p>
                <p className="text-sm">Single Payment</p>

                <div className="flex  items-center justify-center mt-8 mb-12 text-sm">
                    <div className="bg-green-900 rounded-full p-1 flex justify-center items-center mr-2">
                        <Check className="text-green-500" size={20} strokeWidth={1.5}/>
                    </div>
                    <span>Unlimited Audio Uploads</span>
                </div>

                <Button blue text="Proceed to Checkout" onClick={() => setPage(2)}/>
            </div>
        </>
    )
}

export default Plan
