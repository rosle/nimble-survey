import React from 'react';
import { render, screen } from '@testing-library/react';

import FormError from '.';

const TEST_IDS = {
  errorListItem: 'form-error-list-item',
};

describe('FormError', () => {
  it('renders nothing if there are no errors', () => {
    render(<FormError errors={[]} />);

    expect(screen.queryAllByTestId(TEST_IDS.errorListItem)).toEqual([]);
  });

  it('renders error messages if there are errors', () => {
    const errors = [
      { detail: 'Email has already been taken' },
      { detail: "Password confirmation doesn't match Password" },
    ];

    render(<FormError errors={errors} />);

    expect(screen.queryAllByTestId(TEST_IDS.errorListItem)).toHaveLength(2);
    expect(
      screen.queryByText('Email has already been taken')
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Password confirmation doesn't match Password")
    ).toBeInTheDocument();
  });
});
