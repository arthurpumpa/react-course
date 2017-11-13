import * as React from 'react';
import SimpleForm from './SimpleForm';

class FormExample extends React.Component {
    submit = (values: any) => {
        console.log(values);
    }

    render() {
        return (
            <SimpleForm onSubmit={this.submit} />
        );
    }
}

export default FormExample;