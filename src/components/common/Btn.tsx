import React from "react";
import './Btn.css'
interface Props {
    text: string;
}

export const Btn = ({text}:Props) => {
    return(
        <button>{text}</button>
    )
}