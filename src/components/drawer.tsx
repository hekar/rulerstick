import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ReorderIcon from '@material-ui/icons/Reorder';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined'

const useStyles = makeStyles({
  list: {
    width: 480,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {

  const classes = useStyles();
  const [isOpened, setIsOpened] = React.useState(false);

  React.useEffect(() => {
    setIsOpened(props.isOpened);
  }, [props])

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpened(open);
    props.onClose();
  };

  return (
    <Drawer
      anchor="left"
      open={isOpened}
      onClose={toggleDrawer(false)}>
      <List
        subheader={<ListSubheader>Flows</ListSubheader>}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <ListItem button key="Flows">
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Flows" />
        </ListItem>
        <ListItem button key="AddFlow">
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText primary="Add Flow" />
        </ListItem>
      </List>
      <List
        subheader={<ListSubheader>Backlog</ListSubheader>}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <ListItem button key="Backlog">
          <ListItemIcon><ReorderIcon /></ListItemIcon>
          <ListItemText primary="May Do" />
        </ListItem>
      </List>
      <List
        subheader={<ListSubheader>Manage</ListSubheader>}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <ListItem button key="Management">
          <ListItemIcon><SupervisorAccountOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Management" />
        </ListItem>
      </List>
    </Drawer>
  );
}
