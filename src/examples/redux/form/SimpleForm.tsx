import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { required } from './validators';
import CustomInput from './CustomInput';

const SimpleForm = (props: InjectedFormProps) => {
    const {handleSubmit, reset, pristine} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                    name="firstName"
                    component={CustomInput}
                    warn={[required]}
                />
            </div>

            <div className="radio">
                <label>
                    <Field
                        name="optionsRadios"
                        component="input"
                        type="radio"
                        value="option1"
                    />
                    Option 1
                </label>
            </div>

            <div className="radio">
                <label>
                    <Field
                        name="optionsRadios"
                        component="input"
                        type="radio"
                        value="option2"
                    />
                    Option 2
                </label>
            </div>

            <div>
                <button className="btn btn-default" type="submit" disabled={pristine}>
                    Submit
                </button>
                &nbsp;
                <button className="btn btn-default" type="button" disabled={pristine} onClick={reset}>
                    Clear Values
                </button>
            </div>

        </form>
    );
};

export default reduxForm({
    form: 'simple-form'
})(SimpleForm);