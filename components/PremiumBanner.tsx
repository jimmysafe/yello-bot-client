import { FC, Dispatch, SetStateAction } from "react"
import Button from "./Button"

type Props = {
    setShowPremium: Dispatch<SetStateAction<boolean>>
}

const PremiumBanner: FC<Props> = ({ setShowPremium }) => {

    return (
        <div className=" text-white font-secondary flex flex-col justify-center items-center bg-secondary border border-primary rounded px-5 py-7 mb-5">
            <p>You have reached the maximum number of audios.</p>
            <p className="font-medium">Upgrade to Premium to get <b className="text-primary">unlimited uploads!</b></p>
            <Button blue text="Go Premium" className="mt-4" onClick={() =>setShowPremium(true)}/>
        </div>
    )
}

export default PremiumBanner
