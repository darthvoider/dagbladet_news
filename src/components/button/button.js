import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

export const Button = ({ title, action, customClass, type }) => {
    const buttonClass = classNames('btn', customClass);
    return (
        <button
            type={type}
            onClick={action}
            className={buttonClass}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    action: null,
    type: 'button'
};
