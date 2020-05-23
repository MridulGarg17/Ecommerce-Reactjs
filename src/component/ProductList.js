import React from 'react'
 import Product from "./Product";
// import {Title} from "./Title";
// import { storeProducts } from "../static_data/data";
// import styled from "styled-components";
// import {ProductWrapper} from "./Product"
import {connect} from 'react-redux';





const ProductList = (props) => {
  const {list}=props;
 // console.log(list);  
  return (
        <React.Fragment>
    
          <div className="container">
            {/* <Title name="our" title="products" /> */}
            <div className="row">
              {/* {console.log(list)} */}
            {list && list.map((product)=>{
              {console.log(product)}
              return (
                
                <Product  product={product}/>)
            })}
            </div>

          </div>
      
      </React.Fragment>
    )
}




const mapStateToProps = state => ({
  list:state.product.list
});


export default connect(mapStateToProps,null)(ProductList);