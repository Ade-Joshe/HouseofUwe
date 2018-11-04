import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/header'
import Sidebar from './components/sidebar';
import Main from './components/main';


class App extends Component {

  state = {
    fabrics: [
      {
        material: {},
        name: 'Plain'
      },
      {
        material: {},
        name: 'Black'
      },
      {
        material: {},
        name: 'Ankara'
      }
    ],
    styleHandler: {},
    // isFabric: false,
    setProps: null,
    Styles: [
      {
        name: 'Collar'
      },
      {
        name: 'Sleeves'
      },
      {
        name: 'Cuff'
      }
    ]
  }
componentWillMount = () => {
  this.setState({
    setProps: this.state.fabrics
  });
}
  handleFabric = () => {
    this.setState({

    })
  }

  handleStyles = () => {
    this.setState({
      setProps: this.state.Styles
    });
  }

  render() {
    const { setProps } = this.state;
    return (
      <div className="App">
        <div className='firstHeader'>
          <p><strong> Uwe </strong></p>
        </div>
        <div className="header">
          <p>
            <span onClick={this.handleFabric}> Fabrics </span>
            <span onClick={this.handleStyles}> Style </span>
          </p>
        </div>
        <div className='PageWrapper'>
          <Sidebar fabrics={setProps} />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
