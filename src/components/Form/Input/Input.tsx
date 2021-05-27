import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useField } from '@unform/core';

import { InputContainer, InputGroup, ToggleView, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  loading?: any;
  containerStyle?: object;
  filled?: any;
}

export const Input: React.FC<InputProps> = ({
  containerStyle,
  label,
  type,
  name,
  filled = false,
  loading,
  defaultValue: propDefaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState<any>(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, defaultValue, registerField, clearError } =
    useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    setIsFilled(!!inputRef.current?.value);
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    clearError();
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleToggleView = useCallback(() => {
    setIsVisible(state => !state);
  }, []);

  return (
    <InputContainer>
      <InputGroup
        htmlFor={name}
        type={type}
        isFilled={isFilled ? isFilled : filled}
        filled={filled ? filled : false}
        isFocused={isFocused}
        hasError={!!error}
        hasValueInProps={!!propDefaultValue}
        data-testid="input-container"
      >
        <label htmlFor={name}>{label}</label>
        <div>
          <input
            id={name}
            ref={inputRef}
            defaultValue={propDefaultValue || defaultValue}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            autoComplete="off"
            placeholder={loading ? 'Carregando...' : ''}
            name={name}
            type={
              type === 'password'
                ? isVisible
                  ? 'text'
                  : 'password'
                : type || 'text'
            }
            {...rest}
          />
          {type === 'password' && (
            <ToggleView type="button" onClick={handleToggleView}>
              {isVisible ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </ToggleView>
          )}
        </div>
      </InputGroup>
      <ErrorMessage hasError={!!error}>
        <div>{error}</div>
      </ErrorMessage>
    </InputContainer>
  );
};
