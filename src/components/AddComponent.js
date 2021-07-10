import React from 'react'
import Input from './Input'
import '../assets/style/AddComponent.css'

const AddComponent = ({onChangeText,value,propertyName, label}) => {
    
    return (
        <div className="addcomponent-container">
            <Input margin={"1em 1em 1em 1em"} value={value} onChangeText={onChangeText}  label={`${label} ${propertyName}`}/>
        </div>
    )
}

export default AddComponent
