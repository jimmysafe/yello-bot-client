import { FC, ReactNode } from 'react'
import { getTrackBackground } from "react-range";
import { ITrackProps } from 'react-range/lib/types';

type Props = {
    children: ReactNode,
    props: ITrackProps,
    slider: SliderValues,
    duration: number
}

type SliderValues = {
    values: number[]
}

const Track: FC<Props> = ({ children, props, slider, duration }) => {
    return (
        <div
            style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "640px"
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
                    values: slider.values,
                    colors: ["#ccc", "#548BF4", "#ccc"],
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
