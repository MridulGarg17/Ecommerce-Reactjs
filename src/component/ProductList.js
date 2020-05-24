import React from 'react'
import Product from "./Product";
import { connect } from 'react-redux';

const ProductList = (props) => {
  const { list } = props;
  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          {list && list.map((product) => <Product key={product.key} product={product} />  )}
        </div>

      </div>

    </React.Fragment>
  )
}




const mapStateToProps = state => ({
  list: state.product.list
});


export default connect(mapStateToProps, null)(ProductList);