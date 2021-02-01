import { Restaurant } from "@material-ui/icons"

import React, { Component, useEffect } from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import { Link } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

class RestaurantNav extends Component{

    render(){
        return(
           <div id="adjust">
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description.</p>
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
                    <p id="food-description">Sample food description</p>
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
                    <p id="food-description">Sample food description</p>
                  </div>
                  </Item>
                </Carousel>
                
              </div>

              <br>
                </br>
                <br></br>
                <Link to="/addDish">
                <button id="dish-btn" type="submit">Add Dish</button>
                </Link>
          </div> 
        )
    }
}


export default RestaurantNav;