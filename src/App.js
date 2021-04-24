import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../src/components/MyProfile';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: 'light',
    // ヘッダー、フッター
    primary: {
      main: '#1597BB'
    },
    // タブ
    secondary: {
      main: '#1890ff'
    },
    // 非活性テキスト、境界
    third: {
      main: '#aeaaaa'
    },
    // ボディテキスト
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
