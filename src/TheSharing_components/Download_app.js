import React from "react";
import { Component } from "react";

class DownloadAPP extends Component {
    render(){
        return(
            <div className="download_app">
                <div className="discription_app">
                    <div className="header_app">
                        <h4>FREE DELIVERY!</h4>
                    </div>
                    <div className="content_app">
                        <h2>DOWNLOAD THE APP NOW!</h2>
                        <p>Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida pulvinar ipsum mauris etiam mattis nisl.</p>
                    </div>
                    <div className="links_app">
                        <div className="StoreApp">
                            <i class="fab fa-google-play"></i>
                            <span>GOOGLE PLAY</span>
                        </div>
                        <div className="StoreApp">
                            <i class="fab fa-app-store"></i>
                            <span>APP STORE</span>
                        </div>
                    </div>
                </div>

                <div className="image_app">
                    <img src={require('../assest/images/pizzeria-template-mobile-app-mockup.png').default} alt="image app" />
                </div>
            </div>
        )
    }
}
export default DownloadAPP;