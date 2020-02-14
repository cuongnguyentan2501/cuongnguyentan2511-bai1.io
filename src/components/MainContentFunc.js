import React from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductContent from './ProductContent';

export default function MainContentFunc(props) {
  return (
    <div className="container">
      <div className="list-blog">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
          facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
        qui.</p>
      </div>
      <div id="app">
  <div className="cart">Có<span> </span>
    {props.shoppingCart.length}
    <span> </span>sản phẩm trong giỏ hàng</div>
        <div className="product">
          <ProductImage isChosing={props.isChosing}/>
          <ProductContent
            changeProduct={props.changeProduct} 
            allProduct={props.allProduct} 
            isChosing={props.isChosing}
            addToCart={props.addToCart}
            payment={props.payment}/>
        </div >
        <ProductDescription />
      </div>
    </div>
  )
}