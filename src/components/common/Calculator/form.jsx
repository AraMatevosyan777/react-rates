import React from 'react';
import {Field,reduxForm} from 'redux-form';

const Form = (props) => {

    return (

        <form onSubmit={props.handleSubmit} className="input-group w-50 mb-3">
            <Field autoComplete="off"  component='input' name='currentValue' className="form-control"/>
            <Field component='select' name='currentRate' className='btn shadow-sm'>
                <option>select a rate</option>
                {Object.keys(props.rates).map(rateName =>
                    <option key={rateName} className="dropdown-item" href="#" value={props.rates[rateName]}>{rateName}</option>)}
            </Field>
        </form>
    )
}

const FormContainer = reduxForm({form:'input'})(Form)

export default FormContainer;