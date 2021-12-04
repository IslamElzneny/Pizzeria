import React from "react";

const View_All_Menu=()=>{
    return(
        <div className="All_menu">
            <div className="pasta">
                <img src={require('../assest/images/pizzeria-template-menu-pasta-img.png').default} alt="pasta" /> 
                <h4>PASTA</h4>
            </div>

            <div className="pizza">
                <img src={require('../assest/images/pizzeria-template-menu-pizza-img.png').default} alt="pasta" /> 
                <h4>PIZZA</h4>
            </div>

            <div className="dessert">
                <img src={require('../assest/images/pizzeria-template-menu-dessert-img.png').default} alt="pasta" /> 
                <h4>DESSERT</h4>
            </div>
        </div>
    )
}
export default View_All_Menu;