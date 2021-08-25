import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ThemeProvider from '../../Providers/Theme/Theme.provider';
import Header from '../Header';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Videos';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import SearchProvider from '../../Providers/Search/Search.provider';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SearchProvider>
          <Header></Header>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/v/:idVideo">
                <VideoPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </SearchProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
