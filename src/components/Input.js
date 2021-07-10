import React from 'react'
import '../assets/style/Input.css'

const Input = ({value,onChangeText,label, width, margin}) => {
    return (
        <div className="input-container" style={{margin:margin}}>
            <label>{label}</label>
            <input value={value} onChange={(e)=> onChangeText(e.target.value)} style={{width:width}} className={"input-style"} type="text" ></input>
        </div>
    )
}

export default Input
