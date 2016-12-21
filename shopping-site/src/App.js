import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  selectTab = (index) => {
    this.setState({selectedTab: index})
  } // ignore linter warning

  renderContent() {
    switch(this.state.selectedTab) {
      default:
      case 0: return <span>Items</span>;
      case 1: return <span>Cart</span>;
    }
  }

  render() {
    let {selectedTab} = this.state
    return (
      <div className="App">
        <nav className="App-nav">
          <ul>
            <li className={`App-nav-item ${selectedTab === 0 && 'selected'}`}><a onClick={this.selectTab.bind(this, 0)}>Items</a></li>
            <li className={`App-nav-item ${selectedTab === 1 && 'selected'}`}><a onClick={this.selectTab.bind(this, 1)}>Cart</a></li>
          </ul>
        </nav>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
