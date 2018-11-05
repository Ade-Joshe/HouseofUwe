import React, { Component } from 'react'

class Main extends Component {

    checkClick = (style) => {
        const { fabrics } = this.props;
        fabrics(style);
    }

    render() {
        const { style, display } = this.props;
        // console.log(fabrics('me'))
        return (
            <div className="main">
                <div className='box'>
                    <img alt='' src={display} className='box_image' />
                </div>
                {
                    style &&
                    style.map((x, index) => {
                        return (<p key={index} onClick={this.checkClick.bind(null)}> {x.name}</p>);
                    })
                }
            </div>
        )
    }
}

export default Main