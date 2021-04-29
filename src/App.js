import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../src/components/MyProfile';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import loadTheme from './functions/loadTheme';

// 独自テーマのロード
const theme = loadTheme();

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
