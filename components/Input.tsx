import React, { FC, LegacyRef } from 'react'

type InputProps = {
    placeholder: string
    type: string,
    ref: LegacyRef<HTMLInputElement>
}

const Input: FC<InputProps> = ({ placeholder, type, ref }) => {
    return (
        <input 
            className="shadows px-3 py-2 rounded bg-yellow border-2 border-black"
            ref={ref}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default Input
