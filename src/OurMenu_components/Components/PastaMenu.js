import React from "react";

const Pasta_Menu=()=>{
    return(
        <div className="food_menu" id="pasta">
            <div className="header_food_menu">
                <h3>PASTA</h3>
                <p>Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.</p>
            </div>

            <div className="horizontal_line">
                <span></span>
            </div>

            <div className="food_menu_container">
                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pasta_menu/pizzeria-template-pasta-img-1.jpg').default} />
                    </div>
                    <div>
                        <h4>SPAGHETTI BOLOGNESE</h4>
                        <span>With Chianti-braised meat sauce and fresh basil.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pasta_menu/pizzeria-template-pasta-img-.jpg').default} />
                    </div>
                    <div>
                        <h4>CAPRESE PASTA</h4>
                        <span>Roma tomatoes, fresh basil, Sicilian extra-virgin olive oil, pine nuts, and fresh mozzarella.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pasta_menu/pizzeria-template-pasta-img-3.jpg').default} />
                    </div>
                    <div>
                        <h4>FETTUCCINE ALFREDO</h4>
                        <span>Freshly prepared fettuccine pasta swirled in homemade cream sauce.</span>
                    </div>
                </div>


                <div className="food_discription">
                    <div className="image_food">
                        <img src={require('../../assest/images/pasta_menu/pizzeria-template-pasta-img-4.jpg').default} />
                    </div>
                    <div>
                        <h4>TRUFFLE TORTELLONI</h4>
                        <span>Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Pasta_Menu;