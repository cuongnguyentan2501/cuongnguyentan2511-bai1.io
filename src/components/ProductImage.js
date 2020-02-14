import React from 'react';

function ProductImage(props) {
  var {isChosing}=props;
  
  return (
    
    <div className="product-image">
      <div className="image"><img src={isChosing?isChosing.image:""} alt="" /></div>
    </div>
  )
}
export default ProductImage;