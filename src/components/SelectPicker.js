import React from 'react'
import '../assets/style/SelectPicker.css'
const SelectPicker = ({changeSelect,data,value,itemType}) => {
    
    return (
      <div className="selectpicker-container">
        {data != undefined && data != null ? (
          <select className='selectpicker-select' value={value} onChange={(e) => changeSelect(e.target.value)}>
            <option value="" selected disabled>{itemType}</option>
            {data != undefined || null
              ? data.map((item,index) => {
                  return <option key={index}>{item}</option>;
                })
              : null}
          </select>
        ) : null}
      </div>
    );
}

export default SelectPicker
