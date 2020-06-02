import React from 'react';
import { useNavigate } from '@reach/router';
import {
  Icon,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonBase,
  makeStyles,
} from '@openemp-mf/styleguide';

import { links } from '../root.helper';

const useStyles = makeStyles((theme) => ({
  nested_1: {
    paddingLeft: theme.spacing(4),
  },
  nested_2: {
    paddingLeft: theme.spacing(5),
  },
}));

export default function NestedList({ linksList = links }) {
  const [openCollapse, setOpenCollapse] = React.useState({});
  const classes = useStyles();
  const navigate = useNavigate();

  console.log('------', linksList);

  const handleExpandClick = ({ name }) => {
    setOpenCollapse({ ...openCollapse, [name]: !openCollapse[name] });
  };

  const handleNavigation = ({ href }) => {
    navigate(href);
  };

  return linksList.map((ele1) => {
    return (
      <>
        <ListItem
          button
          onClick={() => {
            handleNavigation(ele1);
          }}
        >
          <ListItemIcon>
            <Icon>mail</Icon>
          </ListItemIcon>
          <ListItemText primary={ele1.name} />
          {ele1.submenu ? (
            <ButtonBase
              onClick={(event) => {
                event.stopPropagation();
                handleExpandClick(ele1);
              }}
            >
              {openCollapse[ele1.name] ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
            </ButtonBase>
          ) : null}
        </ListItem>
        {ele1.submenu ? (
          <Collapse in={openCollapse[ele1.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {ele1.submenu.map((ele2) => {
                return (
                  <>
                    <ListItem
                      button
                      onClick={() => {
                        handleNavigation(ele2);
                      }}
                      className={classes.nested_1}
                    >
                      <ListItemIcon>
                        <Icon>mail</Icon>
                      </ListItemIcon>
                      <ListItemText primary={ele2.name} />
                      {ele2.submenu ? (
                        <ButtonBase
                          onClick={(event) => {
                            event.stopPropagation();
                            handleExpandClick(ele2);
                          }}
                        >
                          {openCollapse[ele2.name] ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                        </ButtonBase>
                      ) : null}
                    </ListItem>
                    {ele2.submenu ? (
                      <Collapse in={openCollapse[ele2.name]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {ele2.submenu.map((ele3) => {
                            return (
                              <ListItem
                                onClick={() => {
                                  handleNavigation(ele3);
                                }}
                                button
                                className={classes.nested_2}
                              >
                                <ListItemIcon>
                                  <Icon>mail</Icon>
                                </ListItemIcon>
                                <ListItemText primary={ele3.name} />
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    ) : null}
                  </>
                );
              })}
            </List>
          </Collapse>
        ) : null}
      </>
    );
  });
}
