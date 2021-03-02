import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primarly: 'teal',
  secondary: 'green',
  font: 'sans-serif',
};

const H1 = styled.h1`
  font-family: ${(props) => props.theme.font};
`;

const MovieCard = ({ data }) => {
  const { title, description } = data;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <H1>{title}</H1>
        <p>{description}</p>
      </div>
    </ThemeProvider>
  );
};

export default MovieCard;
