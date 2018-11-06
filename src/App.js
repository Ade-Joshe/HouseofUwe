import React, { Component } from 'react';
import './App.css';
import img1 from './Assets/png/white shorts/Collar 1 white – 3.png';
import img2 from './Assets/png/black shirts/Black fabric.png';
import img3 from './Assets/png/kirikiri star/Ankara 1.png';



import img4 from './Assets/png/white shorts/Web 1920 – 26.png'; //
import img5 from './Assets/png/white shorts/Web 1920 – 25.png'; //
import img6 from './Assets/png/white shorts/Collar 2 white – 25.png'; //
import img7 from './Assets/png/white shorts/Collar 2 white – 18.png'; //
import img8 from './Assets/png/white shorts/Collar 2 white – 26.png'; //
import img9 from './Assets/png/white shorts/Web 1920 – 15.png'; //
import img10 from './Assets/png/white shorts/Web 1920 – 14.png'; //
import img11 from './Assets/png/white shorts/Collar 2 white – 13.png'; //
// import img12 from './Assets/png/white shorts/Collar 2 white – 4.png'; // notFound
// import img13 from './Assets/png/white shorts/Collar 2 white – 26.png'; // notFound
// import img14 from './Assets/png/white shorts/Collar 2 white – 26.png'; // notFound
import img15 from './Assets/png/white shorts/Collar 2 white – 35.png'; //
// import img16 from './Assets/png/white shorts/Collar 2 white – 26.png'; // notFound
// import img17 from './Assets/png/white shorts/Collar 2 white – 26.png'; // notFound
// import img18 from './Assets/png/white shorts/Collar 2 white – 26.png'; // notFound
// import img19 from './Assets/png/white shorts/Collar 2 white – 26.png'; // notFound
import img20 from './Assets/png/white shorts/Collar 2 white – 1.png'; //
import img21 from './Assets/png/white shorts/Collar 2 white – 36.png'; //
import img22 from './Assets/png/white shorts/Web 1920 – 35.png'; //
// import img23 from './Assets/png/white shorts/Collar 2 white – 26.png'; // no match found
// import img24 from './Assets/png/white shorts/Collar 2 white – 26.png'; // no match found
// import img25 from './Assets/png/white shorts/Collar 2 white – 26.png'; // no match found
import img26 from './Assets/png/white shorts/Collar 2 white – 30.png'; //
import img27 from './Assets/png/white shorts/Collar 2 white – 31.png'; //
import img28 from './Assets/png/white shorts/Collar 2 white – 29.png'; //
import img29 from './Assets/png/white shorts/Collar 2 white – 33.png'; //


class App extends Component {

	//the state object
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
		styleHandler: null,
		colorPicker: ['w', 'b', 'a'],
		newDisplay: null,
		ActiveStyleFlag: 'Shirt',
		setProps: null,
		Styles: [{
			name: 'Shirt'
		},
		{
			name: 'Collar'
		},
		{
			name: 'Sleeve'
		},
		{
			name: 'Cuff'
		}],
		ShirtFlag: 'w',
		CollarFlag: 'w',
		SleeveFlag: 'w',
		CuffFlag: 'w'
	}


	//on mounting the component
	componentWillMount = () => {
		const { ShirtFlag, CollarFlag, SleeveFlag, CuffFlag, colorPicker, ActiveStyleFlag } = this.state
		// // mounting sets the fabrics labels
		this.setState({
			setProps: this.state.fabrics,
			displayHandle: img1
		});

		console.log(ShirtFlag, CollarFlag, SleeveFlag, CuffFlag, ActiveStyleFlag);
	}


	// know which style was clicked
	checkClick = (style) => {
		console.log(style);
		this.setState({
			ActiveStyleFlag: style
		});
	}

	// gets the styles (collars, sleeves and cuffs )
	handleStyles = (index) => {
		this.setState({
			styleHandler: this.state.Styles
		});
	}


	changer = (ShirtFlag, CollarFlag, SleeveFlag, CuffFlag) => {
		console.log('i am here now');
		if (ShirtFlag, CollarFlag, SleeveFlag, CuffFlag === 'w') {
			// console.log('ntachi Osa');
			this.setState({
				displayHandle: img1
			})
		}

		if (ShirtFlag, CollarFlag, SleeveFlag, CuffFlag === 'b') {
			this.setState({
				displayHandle: img2
			})
		}
		if (ShirtFlag, CollarFlag, SleeveFlag, CuffFlag === 'a') {
			this.setState({
				displayHandle: img3
			})
		}

		switch (ShirtFlag) {
			case 'w': //white Shirts
				if ((CollarFlag && SleeveFlag) === 'w' && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img4
					})
				}
				if ((CollarFlag && SleeveFlag) === 'w' && (CuffFlag === 'a')) {
					this.setState({
						displayHandle: img5
					})
				}
				if ((CollarFlag && CuffFlag) === 'w' && (SleeveFlag === 'b')) {
					this.setState({
						displayHandle: img6
					})
				}
				if ((CollarFlag === 'w') && (SleeveFlag === 'b') && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img7
					})
				}
				if ((CollarFlag === 'w') && (SleeveFlag === 'b') && (CuffFlag === 'a')) {
					this.setState({
						displayHandle: img8
					})
				}
				if ((CollarFlag === 'w') && (SleeveFlag === 'a') && (CuffFlag === 'w')) {
					this.setState({
						displayHandle: img9
					})
				}
				if ((CollarFlag === 'w') && (SleeveFlag === 'a') && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img10
					})
				}
				if ((CollarFlag === 'w') && (SleeveFlag === 'a') && (CuffFlag === 'a')) {
					this.setState({
						displayHandle: img11
					})
				}

				//black collars
				if ((CollarFlag === 'b') && (SleeveFlag === 'w') && (CuffFlag === 'w')) {
					this.setState({
						// no shirt available
						// displayHandle: img12
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'w') && (CuffFlag === 'b')) {
					this.setState({
						// no shirt available
						// displayHandle: img13
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'w') && (CuffFlag === 'a')) {
					this.setState({
						// no shirt available
						// displayHandle: img14
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'b') && (CuffFlag === 'w')) {
					this.setState({
						displayHandle: img15
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'b') && (CuffFlag === 'a')) {
					this.setState({
						// no shirt available
						// displayHandle: img16
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'a') && (CuffFlag === 'w')) {
					this.setState({
						// no shirt available
						// displayHandle: img17
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'a') && (CuffFlag === 'b')) {
					this.setState({
						// no shirt available
						// displayHandle: img18
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'a') && (CuffFlag === 'a')) {
					this.setState({
						// no shirt available
						// displayHandle: img19
					})
				}

				//ankara Collars

				if ((CollarFlag === 'a') && (SleeveFlag === 'w') && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img20
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'w') && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img21
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'w') && (CuffFlag === 'a')) {
					this.setState({
						displayHandle: img22
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'b') && (CuffFlag === 'w')) {
					this.setState({
						// no shirt available
						// displayHandle: img23
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'b') && (CuffFlag === 'b')) {
					this.setState({
						// no shirt available
						// displayHandle: img24
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'b') && (CuffFlag === 'a')) {
					this.setState({
						// no shirt available
						// displayHandle: img25
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'a') && (CuffFlag === 'w')) {
					this.setState({
						displayHandle: img26
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'a') && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img27
					})
				}
				if ((CollarFlag === 'a') && (SleeveFlag === 'a') && (CuffFlag === 'a')) {
					this.setState({
						displayHandle: img28
					})
				}
				if ((CollarFlag === 'b') && (SleeveFlag === 'b') && (CuffFlag === 'b')) {
					this.setState({
						displayHandle: img29
					})
				}
				// console.log('hey im white, yoohooo')
				break;

			case 'b': //case when the shirt color is black

				break;

			case 'a': //when the shirt is ankara

				break;
			default:
				return null;
				break;
		}
	}


	// passes flags to tell the colors of the shirt,collar,sleeves and cuffs as white.
	changeFabric = (index) => {
		const { ShirtFlag, CollarFlag, SleeveFlag, CuffFlag, colorPicker, ActiveStyleFlag } = this.state

		console.log('i am the fabric ' + colorPicker[index] + ' of ' + this.state.ActiveStyleFlag);
		if (ActiveStyleFlag === 'Shirt') {
			this.setState({
				ShirtFlag: colorPicker[index]
			})
		}
		if (ActiveStyleFlag === 'Collar') {
			this.setState({
				CollarFlag: colorPicker[index]
			})
		}
		if (ActiveStyleFlag === 'Sleeve') {
			this.setState({
				SleeveFlag: colorPicker[index]
			})
		}
		if (ActiveStyleFlag === 'Cuff') {
			this.setState({
				CuffFlag: colorPicker[index]
			})
		}
		console.log(ShirtFlag, CollarFlag, SleeveFlag, CuffFlag, ActiveStyleFlag);
		// console.log(index);
		this.changer(ShirtFlag, CollarFlag, SleeveFlag, CuffFlag);
	}



	render() {
		const { setProps, styleHandler, displayHandle } = this.state;
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
									<div className='MiniCard' key={index} index={index} onClick={this.changeFabric.bind(null, index)}>
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
				</div>
			</div>
		);
	}
}

export default App;