import React from "react";
import inputstyle from './Input.module.css'

const Input = React.forwardRef( (props, ref) => {
    return <div className={inputstyle.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref}  id={props.input.id} {...props.input} />
    </div>
})
export default Input; 