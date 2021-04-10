import React, { useEffect, useReducer } from 'react'
import AppContext from '../src/contexts/AppContext'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MyProfile from '../src/components/MyProfile';

const App = () => {

  return (
    <Router>
      <MyProfile></MyProfile>
      {/* <Route exact path="/login" render={(props) => <Home {...props} errorToggle={errorToggle} setErrorType={setErrorType} setErrorModalOpen={setErrorModalOpen} />} /> */}
    </Router>
  );
}

export default App;
