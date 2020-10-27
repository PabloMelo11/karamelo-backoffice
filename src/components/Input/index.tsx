import React, { useEffect, useRef, useState, useCallback } from 'react';
import InputMask from 'react-input-mask';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { IInputProps } from './Props';

import { Container, Error } from './styles';

const Input: React.FC<IInputProps> = ({
  name,
  icon: Icon,
  containerStyle,
  stylesInput,
  borderColor,
  ...rest
}) => {
  const inputRef = useRef<any>(null);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
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
      style={containerStyle}
      borderColor={borderColor || 'purple'}
    >
      {Icon && <Icon size={20} />}
      <InputMask
        style={stylesInput}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
