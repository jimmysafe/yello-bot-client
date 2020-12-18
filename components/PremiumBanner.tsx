import { FC } from "react"
import Button from "./Button"

type Props = {
    guild_id: string
}

const PremiumBanner: FC<Props> = ({ guild_id }) => {
    return (
        <div className=" text-white font-secondary flex flex-col justify-center items-center bg-secondary border border-primary rounded px-5 py-7 mb-5">
            <p>You have reached the maximum number of audios.</p>
            <p className="font-medium">Upgrade to Premium to get <b className="text-primary">unlimited uploads!</b></p>
            <Button text="Go Premium" className="mt-4"/>
        </div>
    )
}

export default PremiumBanner
