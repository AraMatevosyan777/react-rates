import React from 'react';
import Date from '../../common/Date/Date';
import Card from '../../common/Card/Card';
import Calculator from '../../common/Calculator/Calculator';
import BaseValue from '../../common/BaseValue/BaseValue';
import Slider from "react-slick";


const Home = (props) => {

    let cardsElement = Object.keys(props.rates).map(rateName =>
        <Card key={rateName} rateName={rateName} rates={props.rates} base={props.base} />)

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        dots: true,
        autoplay: true,
        autoplaySpedd: 1000,
        pauseOnHover: true,
        centerMode: true,
        swipeToSlide: true
    };

    return (
        <div>
            <div className="d-flex justify-content-between m-3">
                <Date date={props.date} />
                <BaseValue rates={props.rates} onChange={props.onValueChange} base={props.base} />
            </div>
            <div className='m-5 '>
                <Slider {...settings}>
                    {cardsElement}
                </Slider>
            </div>
            <Calculator rates={props.rates} base={props.base} />
        </div>
    );
}

export default Home;
