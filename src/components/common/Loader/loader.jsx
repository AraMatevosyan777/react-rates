import React from 'react';
import Loader from './loader.svg';


const Preloader = (props) => {
    return (
        <div className='d-flex justify-content-center mt-3'>
           <img className='rounded-circle shadow' style={{width: 50 + 'px'}} src={Loader}/>
        </div>
    );
}

export default Preloader;