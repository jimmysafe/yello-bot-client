import { FC, ReactNode } from 'react'
import { getTrackBackground } from "react-range";
import { ITrackProps } from 'react-range/lib/types';

type Props = {
    children: ReactNode,
    props: ITrackProps,
    time: TimeValues,
    duration: number
}

type TimeValues = {
    values: number[]
}

const Track: FC<Props> = ({ children, props, time, duration }) => {
    return (
        <div
            style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
            }}
        >
            <div
                ref={props.ref}
                style={{
                    height: "10px",
                    width: "100%",
                    borderRadius: "4px",
                    alignSelf: "center",
                    background: getTrackBackground({
                    values: time.values,
                    colors: ["#2E3034", "#FFB300", "#2E3034"],
                    min: 0,
                    max: duration
                    })
                }}
            >
            {children}
            </div>
        </div>
    )
}

export default Track
