import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '.';

const TEST_IDS = {
  inputLabel: 'input-label',
  inputField: 'input',
};

describe('Input', () => {
  it('renders input label and field', () => {
    render(<Input name="email" type="email" label="Email" required />);

    expect(screen.queryByTestId(TEST_IDS.inputLabel)).toBeInTheDocument();
    expect(screen.queryByTestId(TEST_IDS.inputField)).toBeInTheDocument();
  });

  it('if label is not provided, does not render the label', () => {
    render(<Input name="email" type="email" required />);

    expect(screen.queryByTestId(TEST_IDS.inputLabel)).not.toBeInTheDocument();
    expect(screen.queryByTestId(TEST_IDS.inputField)).toBeInTheDocument();
  });

  it('renders correct input attributes', () => {
    render(
      <Input
        name="telephone_number"
        type="tel"
        label="Telephone Number"
        required
      />
    );

    const inputLabel = screen.getByTestId(TEST_IDS.inputLabel);
    const inputField = screen.getByTestId(TEST_IDS.inputField);

    expect(inputLabel.htmlFor).toEqual('telephoneNumber');
    expect(inputLabel.textContent).toEqual('Telephone Number');

    expect(inputField.id).toEqual('telephoneNumber');
    expect(inputField.name).toEqual('telephone_number');
    expect(inputField.type).toEqual('tel');
    expect(inputField.required).toBe(true);
  });
});
