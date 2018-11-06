import React, { Component } from 'react';
import './App.css';
import img1 from './Assets/png/white shorts/Collar 1 white – 3.png';
import img2 from './Assets/png/black shirts/Black fabric.png';
import img3 from './Assets/png/kirikiri star/Ankara 1.png'
// import img3 from './Assets/png/kirikiri star/Ankara 1.png';
import img4 from './Assets/png/kente/Ankara 2 – 1.png';
import img5 from './Assets/png/kente 2/Ankara 3 (2).png';
import img6 from './Assets/png/horses/Ankara 4 (2).png';

// collars for white. bllack and ankara
import colw from './Assets/png/white shorts/Collar 2 white – 6.png';
import colb from './Assets/png/white shorts/black ish/Collar 2 white – 10.png';
import cola from './Assets/png/white shorts/Collar 1 white – 1.png';


// sleeves for white, black and ankara
import sleevew from './Assets/png/white shorts/Collar 2 white – 6.png';
import sleeveb from './Assets/png/white shorts/Collar 2 white – 16.png';
import sleevea from './Assets/png/white shorts/Collar 2 white – 13.png';


class App extends Component {

	state = {
		displayIndex: 0,
		displayHandle: null,
		newDisplay: null,
		setProps: null,
		styleHandler: null,
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
		
		displayArray: [img1, img2, img3],
		
		Styles: [{
			name: 'Collar'
		},
		{
			name: 'Sleeve'
		},
		{
			name: 'Cuff'
		}],
		CollarFlag: 'w',
		SleeveFlag: 'w',
		Cuffflag: 'w',
	}

	componentWillMount = () => {
		const { CollarFlag, SleeveFlag, Cuffflag } = this.state
		// mounting sets the fabrics labels and the default image
		this.setState({
			setProps: this.state.fabrics,
			displayHandle: img1
		});
		this.changer(CollarFlag, SleeveFlag, Cuffflag);
	}

	changer = (x, y, z) => {
		// console.log(x, y, z);
		// switch (x === 'w') {
		// 	case value:

		// 		break;

		// 	default:
		// 		break;
		// }
		// (x)
	}

	handleDisplayChange = (index) => {
		// sets the display onChange index
		this.setState({
			displayHandle: this.state.displayArray[index]
		})
	}


	handleStyles = (index) => {
		// displays the styles (collars, sleeves and cuffs )
		this.setState({
			styleHandler: this.state.Styles
		});
	}

	checkClick = (style) => {
		// know which style was clicked
		console.log(style);
		if (style === 'Collar') {
			this.setState({
				displayArray: [colw, colb, cola]
			});
		};
		if (style === 'Sleeve') {
			this.setState({
				displayArray: [sleevew, sleeveb, sleevea]
			})
		};

		if (style === 'Cuff') {
			this.setState({
				displayArray: [img4, img5, img6]
			})
		};
	}

	changePicture = (index) => {
		// gets the index of the current fabric and
		// sets the display with respect to the index

		this.setState({
			currentFabricIndex: index,
			displayHandle: this.state.displayArray[index]
		});

		console.log(index);
	}

	reset = () => {
		window.location.reload();
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
						<span onClick={this.handleFabric}> Fabrics </span>
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
										{/* <p>{x.name}</p> */}
									</div>
								))) :
								<span >No fabric to diplay </span>
						}
					</div>
					<div className="main">
						<div className='box'>
							<img alt='' src={displayHandle} className='box_image' />
						</div>
						</div>
						<div className='sidebar_style'>
						{
							styleHandler &&
							styleHandler.map((x, index) => {
								return (<p className='MiniCard' key={index} onClick={this.checkClick.bind(null, x.name)}> {x.name}</p>);
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
