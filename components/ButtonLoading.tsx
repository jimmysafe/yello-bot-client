import { FC } from 'react'

type ButtonProps = {
    loader: string,
    onClick?: () => void,
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({ loader, onClick=() => null, disabled }) => {
    return (
        <button className={`flex justify-center items-center px-8 py-3 rounded bg-primary cursor-pointer ${disabled && 'opacity-50 cursor-not-allowed'}`} onClick={onClick} disabled={disabled}>
            <img src={loader} alt="Loading"/>
        </button>
    )
}

export default Button
