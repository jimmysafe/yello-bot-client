import React, { FC } from 'react'

type ButtonProps = {
    text: string,
    onClick?: () => void,
    disabled?: boolean,
    icon?: JSX.Element
}

const Button: FC<ButtonProps> = ({ text, onClick=() => null, disabled, icon }) => {
    return (
        <button className={`flex justify-center items-center px-8 py-3 rounded bg-primary cursor-pointer ${disabled && 'opacity-50 cursor-not-allowed'}`} onClick={onClick} disabled={disabled}>
            <span className="text-secondary font-primary text-sm font-bold flex items-center">
                {icon && icon}
                {text}
            </span>
        </button>
    )
}

export default Button
