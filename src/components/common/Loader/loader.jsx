import React from 'react';
import Loader from './loader.svg';
import '../common.css';


const Preloader = (props) => {
    return (
        <div className='loader'>
           <img src={Loader}/>
        </div>
    );
}

export default Preloader;