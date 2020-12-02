import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./styles";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from "../../constants";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0
  },
  {
    id: 2,
    title: "Play football",
    description: "With my friend",
    status: 2
  },
  {
    id: 3,
    title: "Play game",
    description: "",
    status: 1
  },
];

class TaskBoard extends Component {
  renderBoard() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spcacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(task => task.status === status.value);
          return (
            <Grid item md={4} xs={12} key={status.value}>
              <Box mt={3} mb={1}>
                <div className={classes.status}>{status.label}</div>
              </Box>
              <div className={classes.wrapperListTask}>
                {taskFiltered.map(task => {
                    const { title, description, status } = task;
                    return (
                      <Card key={task.id} className={classes.card}>
                        <CardContent>
                          <Grid container justify="space-between">
                            <Grid item md={8}>
                              <Typography component="h2">
                                {title}
                              </Typography>
                            </Grid>
                            <Grid item md={4}>
                              {status.label}
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Button size="small" className></Button>
                        </CardActions>
                      </Card>
                    );
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> ADD NEW TASKS
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);