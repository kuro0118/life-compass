import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../src/components/MyProfile';
import { MuiThemeProvider } from "@material-ui/core/styles";
import loadTheme from './functions/loadTheme';
import { AuthProvider } from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoot';
import Login from './components/Login';
import Signup from './components/Signup';

// 独自テーマのロード
const theme = loadTheme();

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <PrivateRoute exact path="/" component={MyProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </AuthProvider>
    </MuiThemeProvider>
  );
}

export default App;
