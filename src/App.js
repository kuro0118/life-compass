import React, { useEffect, useReducer } from 'react'
import AppContext from '../src/contexts/AppContext'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../src/components/MyProfile';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { colors } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1597BB'
    },
    secondary: {
      main: '#1597BB'
    }
  },
});

const App = () => {

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <MyProfile></MyProfile>
      </MuiThemeProvider>
      {/* <Route exact path="/login" render={(props) => <Home {...props} errorToggle={errorToggle} setErrorType={setErrorType} setErrorModalOpen={setErrorModalOpen} />} /> */}
    </Router>
  );
}

export default App;
