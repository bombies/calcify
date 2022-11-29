import {useDispatch, useSelector} from "react-redux";
import {ChangeEventHandler} from "react";
import Latex from "react-latex-next";

type Props = {
    value?: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    placeholder?: string,
    width?: string,
    height?: string,
    backgroundColour?: string,
    darkBackgroundColour?: string,
    latex?: boolean,
    className?: string
}


const TextBox = (props: Props) => {
    // @ts-ignore
    const darkMode = useSelector((state) => state.darkMode.value);

    return (
        <input
            className={`rounded-lg shadow-[0_0_5px_1px_rgba(0,0,0,0.25)] transition-faster ${props.className || ''}`}
            title={''}
            value={props.latex ? '' : (props.value || '')}
            onChange={props.onChange}
            type='text'
            placeholder={props.placeholder || ''}
            style={{
                backgroundColor: darkMode ? (props.backgroundColour || 'rgba(0,0,0,0)') : (props.darkBackgroundColour || 'rgba(0,0,0,0)'),
                width: props.width || "inherit",
                height: props.height || "inherit",
            }}
        />
    )
}

export default TextBox