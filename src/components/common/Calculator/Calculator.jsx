import React, { useState } from 'react';
import FormContainer from './form';

const Calculator = (props) => {
    let [result, setResult] = useState(0)

    const onFormChange = (FormData) => {
        console.log(FormData)
        let result = FormData.currentValue / FormData.currentRate
        setResult(result.toFixed(2))
    }

    return (
        <div className='calculator'>
            <div className='calculatorHeader'>
                <h2>Exchange calculator</h2>
            </div>
            <div className="calculatorBody">
                <FormContainer onChange={onFormChange} rates={props.rates} />
                <div className="result">
                    <h3>Result:</h3>
                    <h2>{!result || isNaN(result) ? '0' : result}</h2>&nbsp;<h2>{props.base}</h2>
                </div>
            </div>
        </div>

    )
}

export default Calculator;