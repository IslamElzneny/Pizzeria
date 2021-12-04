import React from "react";
import { HashLink } from "react-router-hash-link";
const JoinUs=()=>{
    return(
        <div className="join_us">
            <div className="header_join_us">
                <h3>JOIN THE TABLE</h3>
            </div>
            <div className="container_join_us">
                <div className="container_head">
                    <h2>FRANCHISE OPPORTUNITIES</h2>
                </div>
                <div className="container_content">
                    <p>Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac velit leo, rutrum tellus augue dolor leo massa augue rhoncus pellentesque pulvinar pellentesque potenti cras arcu praesent urna a, vitae mattis pellentesque rhoncus cursus enim ac eu justo.</p>
                </div>
            </div>

            <div className="footer_join_us">
                <span><HashLink smooth to="/contact#contact">GET IN TOUCH</HashLink></span>
            </div>
        </div>

    )
} 
export default JoinUs;
