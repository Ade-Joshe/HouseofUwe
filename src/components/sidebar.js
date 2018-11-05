import React, { Component, Fragment } from 'react'
import MiniCard from './miniCard';

class Sidebar extends Component {
    render() {
        console.log(this.props)
        const { fabrics } = this.props
        return (
            <Fragment>
                <div className='sidebar'>
                    {
                        fabrics && fabrics !== null ?
                            (fabrics.map((x, index) => (
                                <MiniCard key={index} fabric={x} />
                            ))) :
                            <span >No fabric to diplay </span>
                    }
                </div>
            </Fragment>
        )
    }
}

export default Sidebar;