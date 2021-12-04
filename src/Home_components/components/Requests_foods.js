import React from "react";
import { HashLink } from "react-router-hash-link";
 const Request_foods=()=>{
     return(
         <div className="request_foods">
            <div className="overlayer"></div>
            <div className="container">
                <div className="quotes_for_pizzera">
                    <div className="header">
                        <h3>BRINGING HAPPINESS TO YOU</h3>
                    </div>
                    <p>Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .</p>
                </div>

                <div className="ONLINE_DELIVERY">
                    <div className="icons">
                         <i class="fas fa-mobile-alt fa-customize"></i>
                    </div>
                    <h3>ONLINE DELIVERY</h3>
                    <div className="link_order">
                        <span><HashLink smooth to="/contact#contact">ORDER ONLINE</HashLink></span>
                        <i class="fas fa-arrow-right fa-customize"></i>
                    </div>
                </div>

                <div className="TAKEOUT_ORDER">
                    <div className="icons">
                        <i class="fas fa-hotel fa-customize"></i>
                    </div>
                    
                    <h3>CLICK & COLLECT</h3>
                    <div className="link_order">
                        <span><HashLink smooth to="/contact#contact">TAKEOUT ORDER</HashLink></span>
                        <i class="fas fa-arrow-right fa-customize"></i>
                    </div>
                </div>

                <div className="RESTAURANT_DINING">
                    <div className="icons">
                        <i class="fas fa-pizza-slice fa-customize"></i>
                    </div>
                    <h3>RESTAURANT DINING</h3>
                    <div className="link_order">
                        <span><HashLink smooth to="/contact#contact">BOOK A TABLE</HashLink></span>
                        <i class="fas fa-arrow-right fa-customize"></i>
                    </div>
                </div>

            </div>
         </div>
     )
 }
 export default Request_foods;