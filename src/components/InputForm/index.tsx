import React, { useEffect, useRef, useCallback, useState } from 'react';
import InputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface IInputProps extends InputProps {
  name: string;
  placeholder: string;
}

const InputForm: React.FC<IInputProps> = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

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
    <Container isErrored={!!error}>
      <InputMask defaultValue={defaultValue} ref={inputRef} {...rest} />
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
