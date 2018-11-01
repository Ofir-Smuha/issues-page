import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';

import store from './store';
import {theme} from 'constants/themes';
import AppRouter from "routes/AppRouter";

class App extends Component<{}>{
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter/>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
