import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Private from '../Private/Private.component';
import ThemeProvider from '../../providers/Theme/Theme.provider';
import SearchProvider from '../../providers/Search';
import Header from '../Header';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Videos';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

import Favorites from '../../pages/Favorites/Favorites.page';
import FavoriteVideo from '../../pages/FavoriteVideo/Favorite.Video';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SearchProvider>
          <Header/>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/v/:idVideo">
                <VideoPage />
              </Route>
              <Private exact path="/favorites">
                <Favorites />
              </Private>
              <Private exact path="/f/:idVideo">
                <FavoriteVideo />
              </Private>
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
