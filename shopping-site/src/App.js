import React, { Component } from 'react';
import Nav from './Nav'
import './App.css'
import ItemPage from './ItemPage'
import CartPage from './CartPage'
import {items} from './static-data'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      cart: []
    };
  }

  selectTab = (index) => {
    this.setState({selectedTab: index})
  } // ignore linter warning

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
      // sets cart to a copy of current cart, new item added at the end.
      // SPREAD OPERATOR: expands and extracts out individual items in array. Can also apply to objects when using Babel, available with Create React App.
    })
  }

  handleRemoveOne = (item) => {
    // find index of particular item in cart array
    let index = this.state.cart.indexOf(item.id)
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
      // SLICE joins array left half (up to offending item) with right half (after offending item) in an IMMUTABLE way instead of SPLICE.
    })
  }

  renderContent() {
    // determines content to render depending on selected tab
    switch(this.state.selectedTab) {
      default:
      case 0:
        return (
          <ItemPage items={items} onAddToCart={this.handleAddToCart} />
        );
      case 1: return this.renderCart()
    }
  }

  renderCart() {
    // count how many of each item is in cart
    let itemCounts = this.state.cart.reduce( (itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0
      itemCounts[itemId]++
      return itemCounts
    }, {})

    // create array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Object.keys returns an array of the keys, making it easier to iterate over the keys, similar to the forEach function of arrays.

      // find item by id
      var item = items.find(item => item.id === parseInt(itemId, 10))

      // create a new "item" that also has a 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      }
    })

    return (
      <CartPage
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne}
      />
    )
  }

  // render page
  render() {
    let {selectedTab} = this.state
    return (
      <div className="App">
        <Nav selectedTab={selectedTab} handleTabChange={this.selectTab}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
