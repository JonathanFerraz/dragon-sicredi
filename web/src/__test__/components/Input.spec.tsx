import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';

import { Input } from '../../components';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'Teste',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input label="test" name="test" placeholder="Teste" />,
    );

    expect(getByPlaceholderText('Teste')).toBeTruthy();
  });

  it('should fill in the input ', async () => {
    const { getByPlaceholderText } = render(
      <Input label="test" name="test" placeholder="Teste" />,
    );

    const inputElement = getByPlaceholderText('Teste');

    fireEvent.change(inputElement, {
      target: {
        value: 'test@example.com',
      },
    });

    fireEvent.blur(inputElement);
  });
});
