import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import Taskboard from '../Taskboard/index.js';
import styles from "./styles.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';

const store = configureStore();
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider>
          <ToastContainer />
          <GlobalLoading />
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
