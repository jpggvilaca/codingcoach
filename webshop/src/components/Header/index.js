import React, { Component } from 'react';

import { InnerContainer } from './styles';

export class Header extends Component {
  state = {
    title: 'Header',
    showSomething: false,
  };

  updateTitle = e => {
    const { value } = e.currentTarget;

    if (value === 'interstellar') {
      this.setState({ showSomething: true });
    }

    this.setState({ title: value });
  };

  render() {
    const { title, showSomething } = this.state;

    return (
      <header>
        <InnerContainer>
          <h2 data-testid='title'>{title}</h2>

          <input
            data-testid='updateTitle-input'
            type='text'
            onChange={(this.updateTitle)}
            value={title}
          />

          {showSomething ? (
            <div data-testid='container'>
              Some hidden container that will show if the input value is
              "interstellar"
            </div>
          ) : null}
        </InnerContainer>
      </header>
    );
  }
}

export default Header;
