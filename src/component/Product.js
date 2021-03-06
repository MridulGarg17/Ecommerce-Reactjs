import React from 'react'
import styled from "styled-components";
import {addToCart,removeFromCart,changeQuantity} from '../actions/productAction'
import {connect} from 'react-redux';



 const Product = ({product,addToCart,removeFromCart,changeQuantity}) => {

function Remove(props){
  if(!props.product.inCart) 
        return null; 
    else
        return  <button type="button" onClick={e=>handleRemove()} className="btn btn-success"> Remove From carts</button>
        ; 
}


function AddToCart(props){
  if(props.product.inCart) 
        return null; 
    else
        return  <button type="button" onClick={e=>handleClick()} className="btn btn-success"> Add To carts</button>
        ; 
}


function Increment(props){
  if(!props.product.inCart) 
        return null; 
    else
        return <div> <button type="button" onClick={e=>incDecQuantity(false)} className="btn btn-success"> -</button>
          {props.product.count}
         <button type="button" onClick={e=>incDecQuantity(true)} className="btn btn-success">+</button>
        
        </div>
        ; 
}

function incDecQuantity(flag){
  changeQuantity(product,flag)
}




const handleClick= ()=>{
  addToCart(product)
}

const handleRemove=()=>{
  removeFromCart(product)
}


console.log(product)
  return (
    
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
       
        <div >
         <img src={product.phoneimg}   alt="" style={{width:"100px", marginLeft:"90px"}}/>
       
        </div>
       
          <ul class="list-group list-group-flush">
    <li className="list-group-item">Company : {product.company}</li>
      <li className="list-group-item">Model: {product.title}</li>
      <li className="list-group-item">Price : {product.price}</li>
       <Increment product = {product} /> 
      <li className="list-group-item"></li>
  </ul>  
        <AddToCart product = {product} />
        <Remove product = {product} /> 
        </div>
      </ProductWrapper>
    )
}



export default connect(null,{addToCart,removeFromCart,changeQuantity})(Product);


export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;