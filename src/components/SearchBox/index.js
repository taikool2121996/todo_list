import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          placeholder="Search for..."
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func
};

export default withStyles(styles)(SearchBox);
