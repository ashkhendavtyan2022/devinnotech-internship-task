import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Main} from './Components/Main';
import {Sidebar} from './Components/Sidebar';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/styles/GlobalStyles';
import { Container } from './Components/styles/Container.styled';

const theme = {
  colors: {
    sidebar: "rgb(124, 117, 190)",
    body: "rgb(255, 255, 255)",
    button: "rgb(138, 43, 226)",
  },
  mobile: "600px",
  desktop: "1021px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Container>
      <Sidebar />
      <Routes>
        <Route path="/:id" element={<Main />} />
      </Routes>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
