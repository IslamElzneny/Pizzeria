import React from "react";

export const Location=()=>{
    return(
        <div className="location" id="location">
            <div className="header_location">
                <h4>OUR LOCATION</h4>
                <h2>FIND THE PIZZERIA NEAR YOU</h2>
                <p>Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper dictumst sit interdum ut venenatis pellentesque.</p>
            </div>

            <div className="content_location">
                <div>
                    <h3>ROME</h3>
                    <p>Viale Belfiore,50, 50144 Firenze FI, Italy.
                    <br/>+39 123 456 7890</p>
                </div>

                <div>
                    <h3>FLORENCE</h3>
                    <p>Via delle Lame,55,40122 Bologna BO, Italy..
                    <br/>+39 123 456 7890</p>
                </div>

                <div>
                    <h3>BOLOGNA</h3>
                    <p>S. Marco, 615, 30124 Venezia VE, Italy.
                    <br/>+39 123 456 7890</p>
                </div>

                <div>
                    <h3>VENICE</h3>
                    <p>Via di S. Vincenzo,12/34A, 00123 Roma RM, Italy.
                    <br/>+39 123 456 7890</p>
                </div>
            </div>
        </div>
    )
}