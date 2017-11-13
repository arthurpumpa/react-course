import * as React from 'react';
import Feedback from './Feedback';

class CustomInput extends React.Component<any> {
    render() {
        const {input} = this.props;

        return (
            <div>
                <label>label</label>
                <div>
                    <input {...input} placeholder="label" type="text" className="form-control"/>
                    <Feedback {...this.props} />
                </div>
            </div>
        );
    }
}

export default CustomInput;