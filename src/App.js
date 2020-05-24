import React,{useEffect} from 'react';
import './App.css';
import Nav from './component/Nav'
import Cart from './component/Cart'
import Login from './component/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {storeProducts} from './static_data/data'
import {Provider} from 'react-redux';
import store from './Store';
import {setProducts} from './actions/productAction'
import ProductList from './component/ProductList'


function App() {

  useEffect(() => {
    store.dispatch(setProducts(storeProducts));
    return () => {
      
    }
  }, [])

  return (
    <Provider store={store}>
    <Router> 
    <React.Fragment>
      <Nav/>
      <Switch>
    <Route exact path="/" component={ProductList} />
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/check" component={ProductList}/>
    </Switch>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
