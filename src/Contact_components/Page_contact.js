import React from "react";
import { Component } from "react";
import ViewBackground from '../TheSharing_components/View_background_pages';
import Contact_Form from "./component/Contact";
import { Location } from "../TheSharing_components/location";
import JoinUs from "../TheSharing_components/JoinUs";
import RatesFoods from "../Home_components/components/RatesFoods";
import DownloadAPP from "../TheSharing_components/Download_app";
import Footer from "../TheSharing_components/Footer";
class Contact extends Component{
    state={
        headerTittle:"CONTACT",
        content:"",
        buttomsBook:false
      }
    render(){
        return(
            <div className="container_contact">
                <div className="contact half_view_page">
                    <ViewBackground headerTittle={this.state.headerTittle} content={this.state.content} buttons={this.state.buttomsBook} />
                </div>
                <Contact_Form/>
                <Location/>
                <JoinUs/>
                <RatesFoods/>
                <DownloadAPP/>
                <Footer/>
            </div>
        )
    }

}

export default Contact;