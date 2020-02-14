import React, {Component, Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContentFunc from './components/MainContentFunc';
import Loading from './components/Loading';
const axios = require('axios');
 class App extends Component {
   constructor(props){
     super(props);
     this.state={
      allProduct:"",
      isLoading:true,
      shoppingCart:[],
      isChosing:"",
     };

     
   }
   componentDidMount(){
     
    axios.get('https://5e3e8d7364c3f60014550bac.mockapi.io/api/TShirtProduct')
    .then((res)=>{
      this.setState({
        allProduct:res.data,
        isLoading:false,
        isChosing:res.data[0]
      })
    }) 
    .catch(function (error) {
      console.log(error);
    })
    
   }
   changeProduct=(id)=>{
     let chosingProduct=this.state.allProduct.find(value=>value.id===id);
     this.setState({
       isChosing:chosingProduct
     })
   }
   addToCart=()=>{
     const result=confirm("Bạn có muốn thêm sản phẩm này vào giỏ hàng"); /* eslint no-restricted-globals:0 */
     if(result){
       let {shoppingCart,isChosing}=this.state;
       let index=shoppingCart.findIndex(value=>value.id===isChosing.id)
       if(index!==-1){
        shoppingCart[index].selectItem++;
       }
       else{
         isChosing.selectItem=1;
         shoppingCart.push(isChosing)
       }
       this.setState({
         shoppingCart:shoppingCart,
       })
     }
   }
   payment=()=>{
     let totalProduct='';
     let totalPrice=0;
     let itemPrice=0;
     this.state.shoppingCart.forEach(value=>{
       itemPrice= value.selectItem*value.price
       totalPrice+=itemPrice;
       totalProduct+=("\n"+
       `${value.name} - Màu sắc : ${value.color} - Số lượng: ${value.selectItem}- Thành tiền:`+
       itemPrice
       )

     })

     let result=confirm(
       `Giỏ hàng của bạn gồm : ${totalProduct}`+"\n"+`Tổng tiền là ${totalPrice}`
       );/* eslint no-restricted-globals:0 */
      if(result){
        this.setState({
          isLoading:true,
          
          
        })
        this.state.shoppingCart.forEach(value=>{
          axios({
            method: 'put',
            url: `https://5e3e8d7364c3f60014550bac.mockapi.io/api/TShirtProduct/${value.id}`,
            data: {
              quantity: value.quantity-value.selectItem,
            }
          }).then(res=>{
            let result=this.state.allProduct;
            let index=result.findIndex(value=>value.id===res.data.id);
            console.log(index)
            result[index]=res.data;
            this.setState({
              allProduct:result,
              isLoading:false,
              shoppingCart:[],
              isChosing:this.state.allProduct[0]
            })
          })
        })
      }
   }
   render(){
     let {allProduct,isChosing,shoppingCart}=this.state
     return (
      <Fragment>
        
        <Header />
        {this.state.isLoading?<Loading/>:""}
        <MainContentFunc
          shoppingCart={shoppingCart} 
          allProduct={allProduct} 
          isChosing={isChosing}
          changeProduct={this.changeProduct}
          addToCart={this.addToCart}
          payment={this.payment}/>
        <Footer />
      </Fragment>
  );
   }
  
}
export default App
