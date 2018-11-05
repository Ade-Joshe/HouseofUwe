import React, { Component } from 'react';
import './App.css';
import img1 from './Assets/png/white shorts/Collar 1 white – 3.png';
import img2 from './Assets/png/black shirts/Black fabric.png';

class App extends Component {

	state = {
		displayIndex: null,
		displayHandle: null,
		fabrics: [{
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
		}],
		styleHandler: null,
		displayArray: [img1, img2, img3],
		newDisplay: null,
		setProps: null,
		Styles: [{
			name: 'Collar'
		},
		{
			name: 'Sleeves'
		},
		{
			name: 'Cuff'
		}]
	}

	componentWillMount = () => {
		this.setState({
			setProps: this.state.fabrics,
			displayHandle: img1
		});
	}

	handleDisplayChange = (index) => {
		this.setState({
			displayHandle: this.state.displayArray[index]
		})
	}

	handleFabric = (admin) => {
		console.log(admin)
	}

	handleStyles = (index) => {
		this.setState({
			styleHandler: this.state.Styles
		});
	}

	checkClick = (style) => {
		const { fabrics } = this.props;
		this.handleFabric(style);
	}

	changePicture = (index) => {
		console.log(index);
		this.setState({
			displayHandle: this.state.displayArray[index]
		})
	}

	render() {
		const { setProps, styleHandler, displayHandle } = this.state;
		// const displayHandle = img1;
		return (
			<div className="App">
				<div className='firstHeader'>
					<p><strong> Uwe </strong></p>
				</div>
				<div className="header">
					<p>
						<span onClick={this.handleFabric.bind(null, 'i am Parent')}> Fabrics </span>
						<span onClick={this.handleStyles}> Style </span>
					</p>
				</div>
				<div className='PageWrapper'>
					<div className='sidebar'>
						{
							setProps && setProps !== null ?
								(setProps.map((x, index) => (
									<div className='MiniCard' key={index} index={index} onClick={this.changePicture.bind(null, index)}>
										{/* <img src={props.img} alt='' className='MiniCardPhoto' /> */}
										<p> {x.name} </p>
										<p>{x.name}</p>
									</div>
								))) :
								<span >No fabric to diplay </span>
						}
					</div>
					<div className="main">
						<div className='box'>
							<img alt='' src={displayHandle} className='box_image' />
						</div>
						{
							styleHandler &&
							styleHandler.map((x, index) => {
								return (<p key={index} onClick={this.checkClick.bind(null, x.name)}> {x.name}</p>);
							})
						}
					</div>
					{/* <Sidebar fabrics={setProps} checkSelection={this.handleDisplayChange} /> */}
					{/* <Main fabrics={this.handleFabric} display={displayHandle} style={styleHandler} /> */}
				</div>
			</div>
		);
	}
}

export default App;
