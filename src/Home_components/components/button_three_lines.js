import React from "react";


const Button=(props)=>{
    return(
        <div className="button_three_lines" onClick={props.fun}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Button;