import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles/';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';
import { reduxForm, Field } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';

class TaskForm extends Component {

  handleSubmitForm = data => {
    console.log('data: ', data );
  }
  render() {
    console.log('prop', this.props);
    const { classes, modalActionCreators, handleSubmitForm } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            {/* <TextField
              id="standard-multiline-flexible"
              label="Description"
              multiline
              rowsMax={4}
              className={classes.textField}
              margin="normal"
            /> */}
            <Field
              id="description"
              label="Mô tả"
              multiline
              maxRows="4"
              className={classes.textField}
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Cancel
                    </Button>
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Save
                  </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    modalActionCreators: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
})
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);