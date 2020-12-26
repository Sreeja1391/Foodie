import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaUtensils } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
                <div className="dash_icon">
                    <FaUtensils color='#14A76C'/>
                    <p>FOODIE APP</p>
                </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button>
                <ListItemIcon>
                    <FaHotdog/>
                </ListItemIcon>
                <ListItemText primary="Restaurant" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                    <FaHome/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                    <FaInfoCircle/>
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                    <FaPhoneSquareAlt/>
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        Hello!!
      </main>
    </div>
  );
}