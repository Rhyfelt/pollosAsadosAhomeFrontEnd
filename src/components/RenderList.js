import React from 'react'

const RenderList = ({...args}) => {
    const {Component, classNameContainer} = {...args}
    const NewComponentList = (props) => {
        return (
            <div className={classNameContainer}>
                {props.items.map( item => {
                    return(
                        <Component {...item}/>
                    )
                })}
            </div>
        )
    }
    
    return NewComponentList
    
}

export default RenderList
