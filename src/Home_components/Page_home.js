import React ,{Component} from "react";
import ViewBackground from '../TheSharing_components/View_background_pages';
import View_home from './components/View_page_home';
import Request_foods from "./components/Requests_foods";
import Flavor from "./components/Choose_your_flavor";
import Best_Deals from "./components/Best_deals";
import { Location } from "../TheSharing_components/location";
import JoinUs from "../TheSharing_components/JoinUs";
import RatesFoods from "./components/RatesFoods";
import APP from '../TheSharing_components/Download_app';
import Footer from "../TheSharing_components/Footer";

class Home_page extends Component{
  state={
    headerTittle:"AUTHENTIC ITALIAN PIZZERIA",
    content:"Et praesent nulla urna consequat dui arcu cursus diam fringilla libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit suspendisse aliquam lacus sollicitudin mauris.",
    buttomsBook:true
  }
  render(){
    return(
      <div className="container">
        <div className="home_page full_view_page">
        {/*<img src={require('../assest/images/WIN_20210504_22_52_01_Pro.jpg').default} /> */}
          <ViewBackground headerTittle={this.state.headerTittle} content={this.state.content} buttons={this.state.buttomsBook} className="viewPageHome" />
        </div>
        <View_home />
        <Request_foods />
        <Flavor />
        <Best_Deals />
        <Location />
        <JoinUs />
        <RatesFoods />
        <APP />
        <Footer/>
      </div>
    )
  }
}

export default Home_page;
