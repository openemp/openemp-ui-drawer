import React, { useEffect } from 'react';
import { createNanoEvents } from 'nanoevents';
import clsx from 'clsx';
import { Drawer, makeStyles, Typography } from '@openemp-mf/styleguide';
import NestedList from 'components/nestedList';

// Global object to emit UI events between microfrontends
// window.emitter = createNanoEvents();

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const unbind = window.emitter.on('toggleDrawer', () => {
      console.log('toggleDrawer');
      setOpen(!open);
    });
    return unbind;
  });

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} />
        <NestedList />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div id="app" />
      </main>
    </div>
  );
}
