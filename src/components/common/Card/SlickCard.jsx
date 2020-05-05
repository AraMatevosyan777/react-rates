import React, { Fragment } from 'react';
import Card from './Card';
import Slider from "react-slick";
import Media from 'react-media';
import './SlickCardMedia.css';
import './SlickCard.css';


const SlickCard = (props) => {

    let cardsElement = Object.keys(props.rates).map(rateName =>
        <Card key={rateName} rateName={rateName} rates={props.rates} base={props.base} />)

    return (
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
                        <div className='slider' style={{marginBottom: 30 + 'px'}}>
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
                        <div className='slider' style={{marginBottom: 30 + 'px'}}>
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
    );
}

export default SlickCard;
