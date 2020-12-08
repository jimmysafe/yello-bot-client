import React, { FC } from 'react'

type ButtonProps = {
    text: string,
    onClick: () => void
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className="btn flex justify-center items-center px-8 py-3 rounded bg-teal cursor-pointer shadows border-2 border-black" onClick={onClick}>
            <span className="text-black font-primary text-xs font-bold">
                {text}
            </span>
        </div>
    )
}

export default Button
