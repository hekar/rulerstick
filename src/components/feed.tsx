import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';

import tileData from './tileData';
import Item from './item';

const useStyles = makeStyles((theme) => ({
  gridList: {
    height: 360,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Feed(props) {
  const classes = useStyles();

  return (
    <Paper>
      <Typography variant="h4" component="h3">
        {props.title}
      </Typography>
      <GridList cellHeight={240} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <Item />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
}
