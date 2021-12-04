import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Menu_bar extends Component{
    state={
        ToggleClass:false
    }
    handleClick=()=>{
        this.setState({ToggleClass:!(this.state.ToggleClass)})
    }
    render(){
        return(
            <div className="menu_bar">
                <div className="header_site">
                    <div className="social_media">
                        <a href="https://www.facebook.com/eslam.elzneny" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/eslam.elzneny" target="_blank"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.facebook.com/eslam.elzneny" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div className="branch_site">
                        <h3> The Pizzeria</h3>
                    </div>
                    <div className="order_online">
                        <div><HashLink smooth to="/contact#contact">ORDER ONLINE</HashLink></div>
                    </div>
                    <div className="toggleNav">{/*onClick={()=>setIsOpen(!isOpen)}*/}
                        <i className={this.state.ToggleClass?"fas fa-times fa-customize-bar":"fas fa-bars fa-customize-bar"} onClick={this.handleClick}></i>
                    </div>
                </div>
                <div className="bar_site">
                    <ul className={this.state.ToggleClass? "open":"close"}>{/*{ isOpen?"open" :"close"}*/}
                        <NavLink exact to="/"><li>Home</li></NavLink>
                        <NavLink exact to="/menu"><li>Our Menu</li></NavLink>
                        <NavLink exact to="/about"><li>About</li></NavLink>
                        <NavLink exact to="/offers"><li>Offers</li></NavLink>
                        <NavLink exact to="/contact"><li>Contact</li></NavLink>
                    </ul>
                </div>
            </div>
            
        )
    }
}
    
export default Menu_bar;