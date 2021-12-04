import React from "react";

const Pizza_Menu=()=>{
    return(
        <div className="food_menu pizza_menu" id="pizza">
            <div className="header_food_menu">
                <h3>PIZZA</h3>
                <p>Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.</p>
            </div>

            <div className="horizontal_line">
                <span></span>
            </div>

            <div className="food_menu_container">
                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pizza_menu/pizza-img-1.jpg').default} />
                    </div>
                    <div>
                        <h4>PAESANO</h4>
                        <span>Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pizza_menu/pizza-img-2.jpg').default} />
                    </div>
                    <div>
                        <h4>TUSCAN VEGAN</h4>
                        <span>No Cheese. Marinara sauce, zucchini & squash, Portabella mushrooms, black olives, eggplant, roasted peppers, artichoke hearts, red onions, and fresh arugula.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pizza_menu/pizza-img-3.jpg').default} />
                    </div>
                    <div>
                        <h4>SPICY FENNEL</h4>
                        <span>House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pizza_menu/pizza-img-4.jpg').default} />
                    </div>
                    <div>
                        <h4>SHRIMP ALFREDO</h4>
                        <span>Pancetta, shrimp, red onions, Alfredo sauce, mozzarella, and fresh arugula.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pizza_menu/pizza-img-5.jpg').default} />
                    </div>
                    <div>
                        <h4>ITALIAN MARKET</h4>
                        <span>Prosciutto di Parma, ricotta cheese, pepperoni, red onions, Wisconsin mozzarella, and pizza sauce, drizzled with pesto sauce.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pizza_menu/pizza-img-6.jpg').default} />
                    </div>
                    <div>
                        <h4>BUFALINA PIZZA</h4>
                        <span>Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella.</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Pizza_Menu;