import React,{useEffect} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import {addToCart,removeFromCart} from '../actions/productAction'
import {connect} from 'react-redux';
import { ADD_TO_CART } from '../actions/types';


 const Product = ({product,addToCart,removeFromCart}) => {

// useEffect(() => {
  
// }, [product.inCart])
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
         {/* <img src="https://www.amazon.in/images/I/71T0KJFxCHL._SL1500_.jpg"   style={{width:"100px"}}/> */}
         <img src={product.phoneimg}   style={{width:"100px", marginLeft:"90px"}}/>
       
        </div>
        {/* <div className="title">
          Title
        </div>
        <div>
          Price
        </div> */}
          <ul class="list-group list-group-flush">
    <li className="list-group-item">Company : {product.company}</li>
      <li className="list-group-item">Model: {product.title}</li>
      <li className="list-group-item">Price : {product.price}</li>
  </ul>
          {/* <div className="card-footer d-flex justify-content-between ">
            <div className="title">{product.title}</div>
            <br/>
            <div>
              <span className="mr-1">$</span>
              {product.price}
            </div>  
          </div> */}
{console.log(product)}
        {/* <button type="button" onClick={e=>handleClick()} className="btn btn-success"> { product.inCart ? "Added TO cart": "Add to cart"}</button> */}
        <AddToCart product = {product} />
        {/* <button type="button" onClick={e=>handleClick()} className="btn btn-success"> { product.inCart ? "Added TO cart": "Add to cart"}</button> */}
        <Remove product = {product} /> 
        </div>
      </ProductWrapper>
    )
}



// const mapStateToProps = state => ({
//   list:state.product.list
// });


export default connect(null,{addToCart,removeFromCart})(Product);


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