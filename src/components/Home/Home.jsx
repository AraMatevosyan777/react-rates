import React, { Fragment } from 'react';
import './Home.css';
import Date from '../common/Date/Date';
import Card from '../common/Card/Card';
import Calculator from '../common/Calculator/Calculator';
import BaseValue from '../common/BaseValue/BaseValue';
import Slider from "react-slick";
import Media from 'react-media';


const Home = (props) => {

    let cardsElement = Object.keys(props.rates).map(rateName =>
        <Card key={rateName} rateName={rateName} rates={props.rates} base={props.base} />)

    return (
        <div className='homePage'>
            <div className="homeHeader">
                <Date date={props.date} />
                <BaseValue rates={props.rates} onChange={props.onValueChange} base={props.base} />
            </div>
            <Media queries={{
                smallest: "(max-width: 399px)",
                small: "(max-width: 699px) and (min-width: 400px)",
                medium: "(min-width: 700px) and (max-width: 1099px)",
                large: "(min-width: 1100px)"
            }}>{matches => (
                <Fragment>
                    {matches.large &&
                        <div className='slider'>
                            <Slider
                                className={"center"}
                                infinite={true}
                                centerPadding={"60px"}
                                slidesToShow={4}
                                speed={500}
                                rows={1}
                                slidesPerRow={2}
                                dots={true}
                                autoplay={true}
                                autoplaySpedd={1000}
                                pauseOnHover={true}
                                centerMode={true}
                                swipeToSlide={true}
                            >
                                {cardsElement}
                            </Slider>
                        </div>}
                    {matches.medium &&
                        <div className='slider'>
                            <Slider
                                className={"center"}
                                infinite={true}
                                centerPadding={"60px"}
                                slidesToShow={3}
                                speed={500}
                                rows={1}
                                slidesPerRow={2}
                                dots={true}
                                autoplay={true}
                                autoplaySpedd={1000}
                                pauseOnHover={true}
                                centerMode={true}
                                swipeToSlide={true}
                            >
                                {cardsElement}
                            </Slider>
                        </div>}
                    {matches.small &&
                        <div className='slider'>
                            <Slider
                                className={"center"}
                                infinite={true}
                                centerPadding={"60px"}
                                slidesToShow={2}
                                speed={500}
                                rows={1}
                                slidesPerRow={2}
                                dots={false}
                                autoplay={true}
                                autoplaySpedd={1000}
                                pauseOnHover={true}
                                centerMode={true}
                                swipeToSlide={true}
                            >
                                {cardsElement}
                            </Slider>
                        </div>}
                    {matches.smallest &&
                        <div className='slider'>
                            <Slider
                                className={"center"}
                                infinite={true}
                                centerPadding={"60px"}
                                slidesToShow={1.2}
                                speed={500}
                                rows={1}
                                slidesPerRow={3}
                                dots={false}
                                autoplay={true}
                                autoplaySpedd={1000}
                                pauseOnHover={true}
                                centerMode={true}
                                swipeToSlide={true}
                            >
                                {cardsElement}
                            </Slider>
                        </div>}
                    
                </Fragment>
            )}</Media>
            <Calculator rates={props.rates} base={props.base} />
        </div>
    );
}

export default Home;
