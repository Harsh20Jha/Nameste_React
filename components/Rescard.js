import React from 'react'

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
        
        <div className='rescard'>
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
          <h3>{name}</h3>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{avgRating} stars</h3>
          <h3>{costForTwo / 100} For 2</h3>
          <h3>{deliveryTime} minuts</h3>
        </div>
    
    )
  };
  
  
export default Rescard
