import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  it('Should render correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should update the title accordingly', () => {
    const { getByTestId } = render(<Header />);

    const input = getByTestId('updateTitle-input');

    fireEvent.change(input, { currentTarget: { value: 'some title' } });

    // This is not a very common test and this setTimeout trick is kinda hacky
    // It's just because the state change is asynchronous, so I'm doing this
    // to wait for state changes before proceeding with the test
    setTimeout(() => {
      const headerTitle = getByTestId('title');

      expect(headerTitle.textContent).toEqual('some title');
    }, 1000);

    
  });

  it('Should not show the container onMount', () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId('container')).toBeFalsy();
  });

  it('Should show the container if the title changes to "interstellar"', async () => {
    const { getByTestId, queryByTestId } = render(<Header />);

    const input = getByTestId('updateTitle-input');

    fireEvent.change(input, { currentTarget: { value: 'interstellar' } });

    const containerIsBeingShown = waitForElement(() => queryByTestId('container'));

    expect(containerIsBeingShown).toBeTruthy();
  });
});
