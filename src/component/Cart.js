import React, { useState } from 'react'
import Product from "./Product";
import { Modal } from "react-bootstrap"
import { connect } from 'react-redux';

const Cart = (props) => {
  const { list, isLoggedin } = props;
  var [show, setShow] = useState(false);
  // console.log(list);  

  function ModalPopUp() {
    if (isLoggedin) {
      return <Modal show={show}>
        <Modal.Body>Your order has been placed</Modal.Body>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setShow(false)}>Close</button>
      </Modal>
    }
    else {
      return <Modal show={show}>
        <Modal.Body>Please Login before Buying Products</Modal.Body>
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setShow(false)}>Close</button>
      </Modal>

    }

  }

  function BuyNow() {
    return <button type="button" onClick={e => handleClick()} className="btn btn-success text-center"> Buy All Products</button>;
  }


  const handleClick = () => {
    setShow(true);
  }


  return (
    <React.Fragment>

      <div className="container">
        <div className="text-center">
          {BuyNow()}
          {ModalPopUp()}
        </div>
        <div className="row">
          {list && list.map((product) => {
            if (product.inCart) {
              return (
                <Product key={product.key} product={product} />)
            }
            return null;
          })}
        </div>

      </div>

    </React.Fragment>
  )
}


const mapStateToProps = state => ({
  list: state.product.list,
  isLoggedin: state.auth.isLoggedin
});


export default connect(mapStateToProps, null)(Cart);