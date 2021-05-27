import React, { ButtonHTMLAttributes } from 'react';

import { ButtonRipple, CircleProgressCustom } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any;
  color?: string;
  style?: any;
  loading?: boolean;
  loadingMessage?: string;
  tooltipText?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  children,
  disabled,
  loading = false as any,
  loadingMessage,
  style,
  tooltipText,
  ...rest
}) => {
  return (
    <>
      <ButtonRipple
        variant={variant}
        color={color}
        disabled={disabled || loading}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled ? 'true' : 'false'}
        loading={loading.toString()}
        style={style}
        tooltiptext={tooltipText}
        type={'button'}
        {...rest}
      >
        {tooltipText && <span className="tooltip">{tooltipText}</span>}
        {loading && loadingMessage ? (
          <>
            {loadingMessage}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircleProgressCustom size={30} />
            </div>
          </>
        ) : (
          children
        )}
      </ButtonRipple>
    </>
  );
};
