import * as React from 'react';
import * as cn from 'classnames';
import styles from './ModulesExample.css';

const ModulesExample = () => {
    const classNames = cn(styles.DottedBox);

    return (
        <div className={classNames}>
            <p className={styles.DottedBox_content}>
                To make it work uncomment config/webpack.config.dev.js:167
            </p>
        </div>
    );
};

export default ModulesExample;