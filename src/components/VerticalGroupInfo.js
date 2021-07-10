import React  from 'react'
import '../assets/style/VerticalGroupInfo.css'

const VerticalGroupInfo = ({...parameters}) => {
  const {classNameContainer, classTitle} = {...parameters}
    const NewComponent = (props) => {
      return (
        <div className={classNameContainer}>
          <strong className={classTitle != undefined ? classTitle : null}>{props.title}</strong>
          {props.data.map((dato,index) => {
            return <p key={index}>{dato}</p>;
          })}
        </div>
      );
    }
    return NewComponent
} 

export default VerticalGroupInfo
