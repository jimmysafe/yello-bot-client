import { FC, useState } from 'react'
import { IoMdClose as Close } from 'react-icons/io'
import { Guild } from '../../graphql/generated'
import Checkout from '../checkout/Checkout'
import Plan from '../checkout/Plan'

type Props = {
    close: () => void,
    guild_id: string,
    guild_name: string
}


const Premium: FC<Props> = ({ close, guild_id, guild_name }) => {

    const [page, setPage] = useState<number>(1)

    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-70 w-full h-screen flex justify-center items-center z-10">
            <div className="flex flex-col justify-center items-center bg-secondary border border-primary py-5 px-8 rounded relative" style={{ maxWidth: 415 }}>
                <div className="absolute p-2 rounded-full bg-secondary flex justify-center items-center cursor-pointer" style={{ top: -15, right: -14 }} onClick={close}>
                    <Close className="text-white" size={20}/>
                </div>
                {page === 1 && <Plan setPage={setPage}/>}
                {page === 2 && <Checkout close={close} guild_id={guild_id} guild_name={guild_name} />}
            </div>
        </div>
    )
}

export default Premium
