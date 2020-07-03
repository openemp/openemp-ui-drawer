import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import {
  Icon,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonBase,
  Collapse,
  List,
  makeStyles,
} from '@openemp-mf/styleguide';

const useStyles = makeStyles((theme) => ({
  nested: (props) => ({
    [theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft']: theme.spacing(props.level ? 4 + props.level : 3),
  }),
}));

export default function CollapseItem(props) {
  const { children, href, icon, name, submenu, level } = props;

  const classes = useStyles({ level });
  const [openCollapse, setOpenCollapse] = useState(false);
  // const navigate = useNavigate();

  const handleNavigation = () => {
    // check token b4 send navigation cmd
    navigate(href);
  };

  const handleExpandClick = (event) => {
    event.stopPropagation();
    setOpenCollapse(!openCollapse);
  };

  useEffect(() => {
    const unbind = window.emitter.on('toggleDrawer', () => {
      setOpenCollapse(false);
    });
    return unbind;
  });

  return (
    <>
      <ListItem button onClick={handleNavigation} className={classes.nested}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={name} />
        {submenu ? (
          <ButtonBase onClick={handleExpandClick}>
            {openCollapse ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
          </ButtonBase>
        ) : null}
      </ListItem>
      {submenu ? (
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children}
          </List>
        </Collapse>
      ) : null}
    </>
  );
}

CollapseItem.defaultProps = {
  icon: 'star',
  children: null,
  submenu: null,
  level: null,
};

CollapseItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  submenu: PropTypes.arrayOf(PropTypes.object),
  level: PropTypes.number,
};
