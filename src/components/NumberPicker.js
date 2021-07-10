import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../assets/style/NumberPicker.css'

const NumberPicker = ({onChangeQuantity, onSubstractQuantity, onAddQuantity, cantidad}) => {
   
    
    return (
        <div className="number-picker-container">
        <button  className="number-picker-button" onClick={() => {onSubstractQuantity()}}>
                <AiOutlineMinus/>
            </button>
            <input min="0" className="number-picker-input" value={cantidad}  type="number"  onChange={(e)=>{onChangeQuantity(e.target.value)}} />
            <button onClick={()=>{onAddQuantity()}} className="number-picker-button" >
                <AiOutlinePlus/>
            </button>
        </div>
    )
}

export default NumberPicker;