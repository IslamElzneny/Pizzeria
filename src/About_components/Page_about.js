import React from "react";
import { Component } from "react";
import ViewBackground from '../TheSharing_components/View_background_pages';
import OurStory from "./Components/OurStory";
import Parallex from "./Components/parallax";
import JoinUs from "../TheSharing_components/JoinUs";
import DownloadAPP from "../TheSharing_components/Download_app";
import Footer from "../TheSharing_components/Footer";
class About extends Component{
    state={
        headerTittle:"ABOUT",
        content:"Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.",
        buttomsBook:false
      }
    render(){
        return(
            <div className="container_about">
                <div className="About half_view_page">
                    <ViewBackground headerTittle={this.state.headerTittle} content={this.state.content} buttons={this.state.buttomsBook} />
                </div>
                <OurStory/>
                <Parallex/>
                <JoinUs />
                <DownloadAPP />
                <Footer />
            </div>
        )
    }
}

export default About;