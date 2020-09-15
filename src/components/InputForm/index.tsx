import React, { useEffect, useRef, useCallback, useState } from 'react';
import InputMask from 'react-input-mask';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { IInputProps } from './Props';

import { Container, Error } from './styles';

const InputForm: React.FC<IInputProps> = ({
  name,
  placeholder,
  color,
  disabled,
  ...rest
}) => {
  const inputRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(oldState => !oldState);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string | number) {
        ref.setInputValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
      isValue={defaultValue !== undefined && defaultValue !== null}
      color={color}
      disabled={disabled}
    >
      <InputMask
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        disabled={disabled}
      />
      <span className="highlight" />
      <span className="bar" />
      <label>{placeholder}</label>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default InputForm;
