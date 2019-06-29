import React from 'react';
import { render } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  it('Should render correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
