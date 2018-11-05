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
    styleHandler: null,
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
  handleFabric = (admin) => {

    console.log(admin)
  }

  handleStyles = () => {
    this.setState({
      styleHandler: this.state.Styles
    });
  }

  render() {
    const { setProps, styleHandler } = this.state;
    return (
      <div className="App">
        <div className='firstHeader'>
          <p><strong> Uwe </strong></p>
        </div>
        <div className="header">
          <p>
            <span onClick={this.handleFabric.bind(null,'i am Parent')}> Fabrics </span>
            <span onClick={this.handleStyles}> Style </span>
          </p>
        </div>
        <div className='PageWrapper'>
          <Sidebar fabrics={setProps} />
          <Main fabrics={this.handleFabric} style={styleHandler} />
        </div>
      </div>
    );
  }
}

export default App;
