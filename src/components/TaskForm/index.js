import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new tasks</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.TextField}
            margin="normal"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            className={classes.TextField}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);