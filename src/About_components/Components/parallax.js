import React from "react";

const Parallex=()=>{
    return(
        <div className="parallex">
            <div className="container">
                <div className="header_parallax">
                    <h4>THE PIZZERIA</h4>
                </div>    

                <div className="discription_parallax">
                    <h2>INCREDIBLE DISHES START HERE</h2>
                    <p>Semper dictumst sit interdum venenatis pellentesque nunc libero vestibulum velit sit aliquet pellentesque vitae.</p>
                </div>

                <div className="container_parallax">
                    <div className="section_one">
                        <div className="icon">
                            <i class="fas fa-hotel"></i>
                        </div>
                        <div className="content_section">
                            <h3>4,200 SQUARE FEET OF SPACE</h3>
                            <p>Bibendum rhoncus amet tellus ornare lobortis sit aliquet elit, hac nisi, mauris ac tellus velit sollicitudin.</p>
                        </div>
                    </div>

                    <div className="section_two">
                        <div className="icon">
                            <i class="fas fa-pizza-slice"></i>
                        </div>
                        <div className="content_section">
                            <h3>HERITAGE YOU CAN TASTE</h3>
                            <p>Pretium, condimentum magna amet egestas ligula pretium magna rutrum a in arcu, mauris porttitor fermentum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Parallex;