import React from 'react'
import './Button.scss';
import classNames from 'classnames';

function Button({ chidren, size, color, outline, fullWidth,...rest }) {
    return (
        <button className={classNames('Button', size, color,
        {outline, fullWidth}
        )}
        {...rest}
        >
            {chidren}
        </button>
    );
}
Button.defaultProps={
    size:'medium',
    color: 'blue'
};

export default Button