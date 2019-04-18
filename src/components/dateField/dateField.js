import React from 'react';
import './dateField.css';

const DateField = props => {
   return (
      <label className='dateField' htmlFor={props.id}>
         {props.label}
         <input type='date' name={props.name} value={props.value} onChange={props.onChange} />
      </label>
   );
};

export default DateField;


