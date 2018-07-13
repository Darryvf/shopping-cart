import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CartHeader from './header'
import CartFooter from './footer'
import CartItems from './items'
import AddItem from './addItems'

const cartItemsList =  [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]
  const products = [
    { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
  ]


class App extends Component {
  state = {
    cartItemsList :cartItemsList,
    products: products
  }
  submitForm = (e,quantity,product) => {
    console.log(e,quantity,product);
    e.preventDefault()
    let newProducts = products.filter(item => item.name === product)[0]
    let obj = {
      id: newProducts.id,
      product: newProducts,
      quantity: quantity
    }
    console.log(obj);
      this.setState({cartItemsList: [...this.state.cartItemsList, obj]})
  }
  render() {


    return (
      <div>
        < CartHeader />
        < CartItems  cartList= {this.state.cartItemsList} />
        < AddItem products = {this.state.products} submitForm= {this.submitForm} />
        < CartFooter copyright = '2016'/>
      </div>
    );
  }
}

export default App;
