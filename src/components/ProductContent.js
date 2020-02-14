import React from 'react';

export default function ProductContent(props) {
  let {allProduct}=props;
  let {isChosing}=props;
  return (
    <div className="product-content">
      
      <p className="brand">Thương hiệu:{isChosing.name} </p>
      <p className="quantity">Còn lại: {isChosing.quantity} Sản phẩm</p>
      <div className="wrapper-price">
  <div className="final-price">{(isChosing.price*(1-isChosing.discount/100)).toFixed(0)}&nbsp;₫</div>
        <div className="origin-price">{isChosing.price}&nbsp;₫</div>
  <div className="sale-price">-{isChosing.discount}%</div>
      </div>
      <div className="wrapper-color">
        <div className="text">Màu sắc</div>
        <div className="list-color">
          <p className="color-text"></p>
          <ul>
           {allProduct?allProduct.map((value,index)=>(
             <li key={index} className={isChosing.id===value.id?"active":""}  
            onClick={()=>props.changeProduct(value.id)}
             >
                <img src={value.image}/>
              </li>
           )):""}
            
           
            
          </ul>
        </div>
      </div>
       <button className="add-to-cart" onClick={props.addToCart}>Add to cart</button>
       <button className="add-to-cart payment" onClick={props.payment}>Thanh toán</button>
      
    </div>

  )
}
