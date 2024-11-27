/* eslint-disable react/prop-types */

import styles from './Button.module.css';

const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  theme = 'light',
  className = '',
  loading = false,
  icon,
  iconPosition = 'left',
  ariaLabel,
  ariaExpanded,
  ariaControls,
  ariaDescribedBy,
  ...rest
}) => {
  const buttonAriaLabel =
    ariaLabel || (typeof children === 'string' ? undefined : 'Button');

  const iconOnly = icon && !children;

  const loadingText = loading ? 'Loading, please wait...' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={buttonAriaLabel}
      aria-disabled={disabled || loading}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
      className={`${styles.button} ${
        theme === 'dark' ? styles.dark : styles.light
      } ${disabled ? styles.disabled : ''} ${className}`}
      {...rest}
    >
      {loading && (
        <span
          className={styles.spinner}
          aria-hidden='true'
          role='presentation'
        />
      )}

      {loading && <span className={styles.srOnly}>{loadingText}</span>}

      {/* Icon placement */}
      {icon && iconPosition === 'left' && (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      )}

      {/* Button text */}
      <span className={iconOnly ? styles.srOnly : ''}>{children}</span>

      {/* Icon placement */}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
