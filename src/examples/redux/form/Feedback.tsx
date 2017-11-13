import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

const Feedback = (props: WrappedFieldProps) => {
    const { meta: { touched, error, warning } } = props;

    if (!touched) {
        return null;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return <div className="alert alert-warning">{warning}</div>;
};

export default Feedback;