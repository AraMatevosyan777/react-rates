import React from 'react';
import './Home.css';
import Date from '../common/Date/Date';
import Calculator from '../common/Calculator/Calculator';
import BaseValue from '../common/BaseValue/BaseValue';
import SlickCard from '../common/Card/SlickCard';


const Home = (props) => {
    return (
        <div className='homePage'>
            <div className="homeHeader">
                <Date date={props.date} />
                <BaseValue rates={props.rates} onChange={props.onValueChange} base={props.base} />
            </div>
            <SlickCard rates={props.rates} base={props.base}/>
            <Calculator rates={props.rates} base={props.base} />
        </div>
    );
}

export default Home;
