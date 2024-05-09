import React from 'react';
import AppNavigation from './navigation/AppNavigation';

// Redux Store Configuration:
import {Provider} from 'react-redux';
import store from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
