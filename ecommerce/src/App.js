import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/CartPage';
import checkOutPage from './Pages/checkOutPage'
import Home from './Pages/Home';
import ProductService from './services/ProductService';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
         
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={checkOutPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
