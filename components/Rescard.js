import React from 'react'
import {RES_IMAGE} from '../utils/constants'
const Rescard = (props) => {
  // const {name, cuisines} = props;
  const {resData} = props;
  
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime
  } = resData?.data; // Destructuring ['?'optional chaining]
  
  
    return (    
        <>        
        <div className='rescard'>
          <img src={RES_IMAGE+cloudinaryImageId}></img>
          <h3>{name}</h3>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{avgRating} stars</h3>
          <h3>{costForTwo / 100} For 2</h3>
          <h3>{deliveryTime} minuts</h3>
        </div>
        </>
    )
  };
  
  
export default Rescard
