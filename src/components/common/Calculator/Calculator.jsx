import React, { useState } from 'react';
import FormContainer from './form';

const Calculator = (props) => {
    let [result, setResult] = useState(0)

    const onFormChange = (FormData) => {
        let result = FormData.currentValue / FormData.currentRate
        setResult(result.toFixed(2))
    }

    return (
        <div className='d-flex justify-content-center mb-5'>
            <div className="card w-100">
                <div className="card-header">
                    <h3>
                    Exchange calculator
                    </h3>
                </div>
                <div className="card-body d-flex align-items-center">
                    <FormContainer onChange={onFormChange} rates={props.rates} />
                    <div className='ml-5 d-flex align-items-center'>
                        <h5 className='mr-2'>Result:</h5>
                        <h4 className='display-6'>{!result || isNaN(result) ? '0' : result}</h4>
                        &nbsp;<h4 className='display-6'>{props.base}</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Calculator;