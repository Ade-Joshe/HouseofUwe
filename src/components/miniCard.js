import React, { Fragment } from 'react';
// import img from '../Assets/png/black shirts/Black fabric.png'


const MiniCard = (props) => {
    const { fabric } = props;
    // word(index);
    return (
        <Fragment>
            <div className='MiniCard'>
                {/* <img src={props.img} alt='' className='MiniCardPhoto' /> */}
                <p> {fabric.name} </p>
                <p>{fabric.name}</p>
            </div>
        </Fragment>
    )
}

export default MiniCard;