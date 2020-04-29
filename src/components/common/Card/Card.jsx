import React from 'react';

const Card = (props) => {
    return (
        <div className="card m-2 p-2">
            <div className="card-body">
                <h5 className="card-title">{props.rateName}</h5>
                <h6 className="card-subtitle mb-2 text-muted  float-right">
                    1 {props.base} = {props.rates[props.rateName].toFixed(2)}</h6>
            </div>
        </div>
    )
}

export default Card;