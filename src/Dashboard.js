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
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from 'react-router-dom';
import "./styles.css";

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
      <AppBar id="appbar"position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
                <div className="dash_icon">
                    <FaUtensils color='#006400'/>
                    <p>FOODIE APP</p>
                    <button type="submit" id="logBtn">Log Out</button>
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
                    <FaHome/>
                </ListItemIcon>
                <Link style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} to="/">Home</Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                    <FaInfoCircle/>
                </ListItemIcon>
                <Link style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} to="/about">About Us</Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                    <FaPhoneSquareAlt/>
                </ListItemIcon>
                <Link style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }} to="/contactUs">Contact Us</Link>
              </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
              {/* <>
              <div className="App">
                <Carousel breakPoints={breakPoints}>
                  <Item>
                  <div id="food">
                    <img src="/images/uthappizza.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Uthap Pizza</span>
                    <span id="food-prize">350/-</span>
                    <br></br>
                    <p id="food-description">A unique combination of Indian Uthappam(pancake) and Italian pizza, 
                      topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion,
                       Guntur chillies and Buffalo Paneer.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/vadonut.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Vadonut</span>
                    <span id="food-prize">70/-</span>
                    <br></br>
                    <p id="food-description">A donut is a round, deep fried cake, usually with a hole in the center. 
                    Your favorite breakfast might be a chocolate donut and a cup of coffee.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/zucchipakoda.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Zucchipakoda</span> 
                    <span id="food-prize">150/-</span>   
                    <br></br>
                    <p id="food-description">Crispy Zucchini Pakoda recipe are Indian style Zucchini Fritters which are crispy ,
                    healthy and easy to make.An awesome variation for regular Onion Pakora.
                    Serve this pakoda hot and enjoy with a cup of hot masala chai.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/uthappizza.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Uthap Pizza</span>
                    <span id="food-prize">350/-</span>
                    <br></br>
                    <p id="food-description">A unique combination of Indian Uthappam(pancake) and Italian pizza, 
                      topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion,
                       Guntur chillies and Buffalo Paneer.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/vadonut.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Vadonut</span>
                    <span id="food-prize">70/-</span>
                    <br></br>
                    <p id="food-description">A donut is a round, deep fried cake, usually with a hole in the center. 
                    Your favorite breakfast might be a chocolate donut and a cup of coffee.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/zucchipakoda.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Zucchipakoda</span> 
                    <span id="food-prize">150/-</span>   
                    <br></br>
                    <p id="food-description">Crispy Zucchini Pakoda recipe are Indian style Zucchini Fritters which are crispy ,
                    healthy and easy to make.An awesome variation for regular Onion Pakora.
                    Serve this pakoda hot and enjoy with a cup of hot masala chai.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/uthappizza.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Uthap Pizza</span>
                    <span id="food-prize">350/-</span>
                    <br></br>
                    <p id="food-description">A unique combination of Indian Uthappam(pancake) and Italian pizza, 
                      topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion,
                       Guntur chillies and Buffalo Paneer.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/vadonut.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Vadonut</span>
                    <span id="food-prize">70/-</span>
                    <br></br>
                    <p id="food-description">A donut is a round, deep fried cake, usually with a hole in the center. 
                    Your favorite breakfast might be a chocolate donut and a cup of coffee.</p>
                  </div>
                  </Item>
                  <Item>
                  <div id="food">
                    <img src="/images/zucchipakoda.png"/>
                    <br></br>
                    <br></br>
                    <span id="food-name">Zucchipakoda</span> 
                    <span id="food-prize">150/-</span>   
                    <br></br>
                    <p id="food-description">Crispy Zucchini Pakoda recipe are Indian style Zucchini Fritters which are crispy ,
                    healthy and easy to make.An awesome variation for regular Onion Pakora.
                    Serve this pakoda hot and enjoy with a cup of hot masala chai.</p>
                  </div>
                  </Item>
                </Carousel>
              </div>
              
          </> */}
          <br></br>
      {/* <button id="dish-btn" type="submit">Add Dish</button>  */}
      </main>
      
    </div>
    
  );
}
