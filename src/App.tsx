import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Results } from './pages/Results';

interface Props {}
const App: React.FC<Props> = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/results/:sourceNumber" exact component={Results} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
