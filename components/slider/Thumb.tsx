import { FC } from 'react'
import moment from 'moment'
import { IThumbProps } from 'react-range/lib/types'

type Props = {
    props: IThumbProps,
    slider: SliderValues,
    index: number
}

type SliderValues = {
    values: number[]
}


const Thumb: FC<Props> = ({ props, slider, index }) => {
    return (
        <div
            {...props}
            style={{
                ...props.style,
                display: "flex",
                height: "20px",
                width: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
                boxShadow: "#0000002e 0px 0px 10px 3px"
            }}
        >
            <div
                style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#548BF4"
                }}
            >
                {moment()
                .startOf("day")
                .seconds(slider.values[index])
                .format("H:mm:ss")}
            </div>
            <div
                style={{
                height: "16px",
                width: "5px"
                }}
            />
        </div>
    )
}

export default Thumb
