import React, { Component, Fragment } from 'react'
import MiniCard from './miniCard';

class Sidebar extends Component {

    sendChange = (index) => {
        const { checkSelection } = this.props;
        checkSelection(index);
    }

    render() {
        // console.log(this.props)

        const { fabrics, handleDisplayChange } = this.props
        return (
            <Fragment>
                <div className='sidebar'>
                    {
                        fabrics && fabrics !== null ?
                            (fabrics.map((x, index) => (
                                <MiniCard word={this.sendChange} key={index} index={index} fabric={x} />
                            ))) :
                            <span >No fabric to diplay </span>
                    }
                </div>
            </Fragment>
        )
    }
}


//  handleDisplayChange.bind(null, index) }

export default Sidebar;