import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Notes from './page/Notes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
