import React from 'react';
import PropsType from 'prop-types';
import classNames from 'classnames';
import styles from './index.module.css';

export default function CustomButton({
  className = '',
  label = '',
  variant = 'basic',
  size = '',
  disableClassName = '',
  disable = false,
  onClick,
  children
}) {
  const handleButtonClick = (event) => {
    if (disable) {
      return;
    }

    onClick && onClick({ event });
  };
  const renderChildren = () => {
    if (label) {
      return label;
    }
    if (children) {
      return children;
    }
    return 'Button';
  };

  const _className = classNames(
    className,
    styles[size],
    styles.button,
    styles[variant],
    {
      [styles.disable]: disable,
      [styles.disableClassName]: disable
    }
  );

  return (
    <div onClick={handleButtonClick} className={_className}>
      {renderChildren()}
    </div>
  );
}

CustomButton.prototype = {
  onClick: PropsType.func,
  label: PropsType.string,
  variant: PropsType.string,
  size: PropsType.number,
  className: PropsType.string,
  disableClassName: PropsType.string,
  children: PropsType.node,
  disable: PropsType.bool
};
