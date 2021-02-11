import React from 'react';
import Route from '../assignment_project/src/navigators/routes';
import 'react-native-gesture-handler';
import {createStore} from 'redux';
import rootReducer from '../assignment_project/src/reducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Route />
  </Provider>
);

export default App;
