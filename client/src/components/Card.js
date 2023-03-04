import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card shadow" style={{ width: "18rem;" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text fs-6">Number of rooms: {props.rooms}</p>
                <p className="card-text">Per day price: {props.price}</p>
                <div className='text-end'>
                    <Link to='/signinup' style={{ color: 'white', textDecoration: 'none' }}><button type="button" class="btn btn-primary">Book Room</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card;