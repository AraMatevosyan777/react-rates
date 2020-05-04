import React from 'react';
import {Field,reduxForm} from 'redux-form';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="calculatorForm">
            <Field autoComplete="off"  component='input' name='currentValue'/>
            <Field component='select' name='currentRate'>
                <option>select a rate</option>
                {Object.keys(props.rates).map(rateName =>
                    <option key={rateName}value={props.rates[rateName]}>{rateName}</option>)}
            </Field>
        </form>
    )
}

const FormContainer = reduxForm({form:'input'})(Form)

export default FormContainer;