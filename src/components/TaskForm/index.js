import { Modal } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles/';
import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Clear';
import styles from './styles';
import PropTypes from 'prop-types';
class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>Add new</span>
            <CloseIcon className={classes.closeIcon} onClick={onClose} />
          </div>
          <div className={classes.content}>
            <form>
              <Grid container>
                <Grid item md={12}>
                  <TextField
                    id="standard-name"
                    label="Title"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item md={12}>
                  <TextField
                    id="standard-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax={4}
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
                <Grid item md={12}>
                  <Box display="flex" flexDirection="row-reverse" mt={2}>
                    <Box ml={1}>
                      <Button variant="contained" onClick={onClose}>
                        Cancel
                    </Button>
                    </Box>
                    <Button variant="contained" color="primary">
                      Save
                  </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  onClose: PropTypes.func,
};

export default withStyles(styles)(TaskForm);