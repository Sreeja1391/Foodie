import React from 'react';
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

const Home  = () => {
    return(
        <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/restaurant" >
                   Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signup">
                    LogOut
                </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Home;