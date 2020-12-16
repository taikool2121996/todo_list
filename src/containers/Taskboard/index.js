import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskForm from './../../components/TaskForm';
import TaskList from './../../components/TaskList';
import SearchBox from './../../components/SearchBox';
import { STATUSES } from '../../constants';
import * as taskActions from './../../actions/task';
import * as modalActions from './../../actions/modal';
import styles from './styles';
class TaskBoard extends Component {
  state = {
    open: false,
  };
/*
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }
*/
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    const { modalActions } = this.props;
    const { showModal, changeModalTitle, changeModalContent } = modalActions;
    showModal();
    changeModalTitle('Add new work');
  };

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spcacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(task => task.status === status.value);
          return <TaskList key={status.value} tasks={taskFiltered} status={status} />
        })}
      </Grid>
    );
    return xhtml;
  }


  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = (
      <TaskForm open={open} onClose={this.handleClose} />
    );
    return xhtml;
  }

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleFilter = e => {
    //console.log('e: ', e);
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard} id="1">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.loadData}
          style={{
            marginRight: 20,
          }}
        >
           LOAD DATA
        </Button>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> ADD NEW TASKS
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TaskBoard)
);