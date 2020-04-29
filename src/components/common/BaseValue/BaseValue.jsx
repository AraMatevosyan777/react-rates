import React from 'react';
import {reduxForm, Field} from 'redux-form';

const BaseValueForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className='d-flex'>
            <h5 className='mr-2'>Rate of {props.base}</h5>
                <Field component='select' name='currentValue'>
                    <option>--select value--</option>
                    { Object.keys(props.rates).map(rateName => <option key={rateName}>{rateName}</option>)}
                </Field>
        </form>
    )
}

const BaseValue = reduxForm({form:'base=value'})(BaseValueForm)

export default BaseValue;