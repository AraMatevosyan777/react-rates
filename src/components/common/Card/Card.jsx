import React from 'react';
import './SlickCardMedia.css';
import './SlickCard.css';

const Card = (props) => {
    return (
        <div className="c">
        <div className="card">
            <div className="card-body">
                <h3>{props.rateName}</h3>
                <h4>1 {props.base} = {props.rates[props.rateName].toFixed(2)}</h4>
            </div>
        </div></div>
    )
}

export default Card;