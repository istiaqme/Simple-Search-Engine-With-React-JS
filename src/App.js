import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchHome from './SearchHome';
import ResultPage from './ResultPage';

function App() {
  return (
      <main>
          <Switch>
            <Route path="/result/:keyword" component={ResultPage} exact/>
            <Route path="/" component={SearchHome} exact />
          </Switch>
      </main>
  )
}

export default App;