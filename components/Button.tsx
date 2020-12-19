import React, { FC } from 'react'

type ButtonProps = {
    text: string,
    onClick?: () => void,
    disabled?: boolean,
    icon?: JSX.Element
    className?: string,
    dark?: boolean,
    blue?: boolean
}

const Button: FC<ButtonProps> = ({ text, onClick=() => null, disabled, icon, className, dark, blue }) => {
    return (
        <button className={`flex justify-center items-center px-8 py-3 rounded  ${dark ? 'bg-secondary bg-opacity-50 text-primary' : blue ? 'bg-tertiary text-white' : 'text-secondary bg-primary'} cursor-pointer ${disabled && 'opacity-50 cursor-not-allowed'} ${className}`} onClick={onClick} disabled={disabled}>
            <span className="font-secondary text-sm font-bold flex items-center">
                {icon && icon}
                {text}
            </span>
        </button>
    )
}

export default Button
