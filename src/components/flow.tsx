import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

import Feed from './feed'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default function Flow() {
  const classes = useStyles();

  return (
    <div>
      <Paper>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Feed title="Today" />
        </Grid>
        <Grid item xs={8}>
          <Feed title="This Week" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Feed title="May Do" />
        </Grid>
      </Grid>
      </Paper>

      <Zoom in={true}>
        <Tooltip title="Add item to feed" aria-label="add">
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Zoom>
    </div>
  );
}

