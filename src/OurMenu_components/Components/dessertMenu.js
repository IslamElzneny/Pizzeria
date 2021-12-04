import React from "react";

const Dessert_Menu=()=>{
    return(
        <div className="food_menu dissert_menu" id="dessert">
            <div className="header_food_menu">
                <h3>DEESERT</h3>
                <p>Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.</p>
            </div>

            <div className="horizontal_line">
                <span></span>
            </div>

            <div className="food_menu_container">
                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/dessert/pizzeria-template-dessert-img-1.jpg').default} />
                    </div>
                    <div>
                        <h4>ITALIAN CANNOLI</h4>
                        <span>An Italian handcrafted pastry shell filled with fresh ricotta cheese and chocolate.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/dessert/pizzeria-template-dessert-img-2.jpg').default} />
                    </div>
                    <div>
                        <h4>TRUFFLE CHOCOLATE</h4>
                        <span>Crafted with layers of dark, moist chocolate and a silky truffle chocolate filling.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/dessert/pizzeria-template-dessert-img-3.jpg').default} />
                    </div>
                    <div>
                        <h4>CARROT CAKEL</h4>
                        <span>Studded with raisins, walnuts, and pineapple, finished with a smooth cream cheese icing.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/dessert/pizzeria-template-dessert-img-4.jpg').default} />
                    </div>
                    <div>
                        <h4>PIZZERIA'S TIRAMISU</h4>
                        <span>Homemade with ladyfingers soaked in espresso, layered with fresh mascarpone cheese.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/dessert/pizzeria-template-dessert-img-5.jpg').default} />
                    </div>
                    <div>
                        <h4>ITALIAN CREAM CAKE</h4>
                        <span>Sweet cream cake with coconut, pecans, and cream cheese frosting.</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dessert_Menu;