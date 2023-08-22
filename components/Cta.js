import React from 'react'
import { useState } from 'react';
import resList from '../utils/mocData';

const Cta = (props) => {
    const {text} = props;

    const [ListOfRes, setListOfRest] = useState(null);
  return (
    <div className='cta'>
          <button type='btn' onClick={() => {
            
            }}>{text}</button>
    </div>
  )
}

export default Cta
