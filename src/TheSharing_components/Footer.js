import React from "react";
import { useHistory } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
const getYear=()=>{
    var d = new Date();
    var n = d.getFullYear();
    return n;
}
const Footer=()=>{
    return(
        <div className="footer">
            <div className="links_site">
                <div className="discription_site">
                    <h2 className="header_site"> The Pizzeria </h2>
                    <p>Vivamus convallis fermen sollicitudin et, vitae elit in vel ultrices sed in urna ipsum ullamcorper auctor.</p>
                </div>

                <div className="about_links">
                    <h4> ABOUT US </h4>
                    <ul>
                        <li><HashLink to="/about#story" target="_blank">Our Story</HashLink></li>
                        <li><HashLink smooth to="#location">Our Locations</HashLink></li>
                        <li><HashLink smooth to="/Offers#currentDeals">Current Deals</HashLink></li>
                        <li><HashLink to="/contact#contact" target="_blank">Contact Us</HashLink></li>
                    </ul>
                </div>

                <div className="menu_links">
                    <h4> OUR MENU</h4>
                    <ul>
                        <li><HashLink smooth to="/menu#pizza">Pizza</HashLink></li>
                        <li><HashLink smooth to="/menu#pasta">Pasta</HashLink></li>
                        <li><HashLink smooth to="/menu#dessert">Dessert</HashLink></li>
                        <li>Take & Bake</li>
                    </ul>
                </div>

                <div className="location_links">
                    <h4> OUR LOCATION</h4>
                    <ul>
                        <li><HashLink smooth to="#location">The Pizzeria Rome</HashLink></li>
                        <li><HashLink smooth to="#location">The Pizzeria Madrid</HashLink></li>
                        <li><HashLink smooth to="#location">The Pizzeria Paris</HashLink></li>
                        <li><HashLink smooth to="#location">The Pizzeria Miami</HashLink></li>
                    </ul>
                </div>

            </div>

            <div className="link_social_media">
                <a href="https://www.facebook.com/eslam.elzneny"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/eslam.elzneny"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.facebook.com/eslam.elzneny"><i class="fab fa-instagram"></i></a>
            </div>

            <div className="copyright">
                <span className="">Copyright © {getYear()} The Pizzeria</span>
                <div className="write_with">Powered by  <span>Islam Elzneny</span></div>
            </div>
        </div>
    )
}
export default Footer;