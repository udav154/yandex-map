import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PATHS } from './const';
import Pages from './pages/index';

const App = () => {

  return (
    <BrowserRouter>
        <Route exact component={Pages.HomePage} path={PATHS.home.url} />
    </BrowserRouter>
  )
}

export default App;