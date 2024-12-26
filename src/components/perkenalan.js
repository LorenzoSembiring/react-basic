import React from "react";

const Perkenalan = (props) => {
    const handleClick = (name) => {
        console.log("button telah di klik" + name)
    }
    
    return (
        <div>
            <div>Halo, nama saya adalah {props.name}</div>
            <div>Hobi saya adalah {props.hobby}</div>
            <button onClick={() => handleClick(props.name)}>klik ini</button>
        </div>
    )
}

export default Perkenalan;