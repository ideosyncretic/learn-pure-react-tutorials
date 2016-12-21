import React, { Component } from 'react';
import Nav from './Nav'
import './App.css'
import ItemPage from './ItemPage'
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
      // set cart to a copy of current cart, new item added at the end.
      //Spread operator expands and extracts out individual items in array. Can also apply to objects when using Babel, available with Create React App.
    })
  }

  renderContent() {
    switch(this.state.selectedTab) {
      default:
      case 0:
        return (
          <ItemPage items={items} onAddToCart={this.handleAddToCart} />
        );
      case 1: return <span>Cart</span>;
    }
  }

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
