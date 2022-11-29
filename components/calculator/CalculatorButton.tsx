import {MouseEventHandler} from "react";
import Latex from "react-latex-next";

type Props = {
    label: string,
    color?: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}

const CalculatorButton = (props: Props) => {
    return (
        <div
            style={{
                backgroundColor: props.color || 'rgb(255,148,225)'
            }}
            className='h-full p-2 bg-opacity-90 backdrop-blur-xl cursor-pointer hover:brightness-95 transition-faster self-center flex flex-col justify-center rounded-lg'
            onClick={props.onClick}
        >

            <p className='text-center text-2xl font-medium'><Latex>{props.label}</Latex></p>
        </div>
    )
}

export default CalculatorButton