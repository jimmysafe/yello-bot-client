import React, { FC } from 'react'

type ButtonProps = {
    text: string,
    onClick: () => void
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className="flex justify-center items-center px-8 py-3 rounded bg-primary cursor-pointer" onClick={onClick}>
            <span className="text-secondary font-primary text-xs">
                {text}
            </span>
        </div>
    )
}

export default Button
