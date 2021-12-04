import React from "react";
import { Component } from "react";
class View_page_home extends Component{
    render(){
        return(
            <div className="view_page_home">
                <div className="elementor-widget-overflow">
                    <img src={require('../../assest/images/pizzeria-template-header-pizza-img.png').default} alt="elementor-widget-overflow" />
                </div>
                <div className="discriptions_for_pizza">
                    <div className="Fresh_ingredients">
                        <img src={require('../../assest/images/2021-08-17.jpg').default} alt="Fresh_ingredients" />
                        <div className="header">
                            <h3>FRESH INGREDIENTS</h3>
                        </div>
                        <p>Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.</p>
                    </div>


                    <div className="handmade_mozarella">
                        <img src={require('../../assest/images/pizzeria-template-homemade-mozarella.jpg').default} alt="Fresh_ingredients" />
                        <div className="header">
                            <h3>HANDMADE MOZARELLA</h3>
                        </div>
                        <p>Feugiat neque, rhoncus suspendisse proin amet aliquet diam pretium condimentum nisl tempus risus imperdiet egestas sit.</p>
                    </div>


                    <div className="secret_recipe">
                        <img src={require('../../assest/images/pizzeria-template-secret-recipe-sauce-img.jpg').default} alt="Fresh_ingredients" />
                        <div className="header">
                            <h3>"SECRET RECIPE"<span>SAUCE</span></h3>
                        </div>
                        <p>Placerat id sagittis dolor dictum sit ante dui varius dui eu iaculis pellentesque nam lobortis lectus.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default View_page_home;