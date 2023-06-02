import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux';
import {Navigation} from './navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
