import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../src/components/MyProfile';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1597BB'
    },
    secondary: {
      main: '#1890ff'
    },
    third: {
      main: '#aeaaaa'
    },
    body: {
      main: '#194350'
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
