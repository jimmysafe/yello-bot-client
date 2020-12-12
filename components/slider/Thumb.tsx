import { FC } from 'react'
import moment from 'moment'
import { IThumbProps } from 'react-range/lib/types'

type Props = {
    props: IThumbProps,
    time: TimeValues,
    index: number
}

type TimeValues = {
    values: number[]
}


const Thumb: FC<Props> = ({ props, time, index }) => {
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
                    top: index === 0 ? "-35px" : "25px",
                    left: index === 0 ? '0px' : '-35px',
                    color: "#272727",
                    fontWeight: "bold",
                    fontSize: "12px",
                    fontFamily: 'Space Mono, monospace',
                    padding: "4px",
                    borderRadius: "4px",
                    backgroundColor: "#FFB300"
                }}
            >
                {moment()
                .startOf("day")
                .seconds(time.values[index])
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
