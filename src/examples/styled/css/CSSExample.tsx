import * as React from 'react';
import './CSSExample.css';
import * as cn from 'classnames';

const CSSExample = () => {
    const classNames = cn('DottedBox', {
        'DottedBox--font': true,
        'DottedBox--color': false
    });

    return (
        <div className={classNames}>
            <p className="DottedBox_content">Get started with CSS styling</p>
        </div>
    );
};

export default CSSExample;