import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoPage from '../../pages/Videos';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
// import { random } from '../../utils/fns';

function App() {
  const [value, setValue] = useState('Wizeline');

  const onchange = (data) => {
    setValue(data);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header
          onchange={(e) => {
            onchange(e);
          }}
        ></Header>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage txtSearch={value} />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/v/:idVideo">
              <VideoPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
