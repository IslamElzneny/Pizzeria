import React,{Component} from "react";
import ViewBackground from '../TheSharing_components/View_background_pages';
import Best_offers from "./component/BestOffers";
import { Location } from "../TheSharing_components/location";
import DownloadAPP from "../TheSharing_components/Download_app";
import Footer from "../TheSharing_components/Footer";
class Offers extends Component{
    state={
        headerTittle:"OFFERS",
        content:"Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.",
        buttomsBook:false
      }
    render(){ 
        return(
            <div className="container_offers">
                <div className="offers half_view_page">
                    <ViewBackground headerTittle={this.state.headerTittle} content={this.state.content} buttons={this.state.buttomsBook} />
                </div>
                <Best_offers />
                <Location/>
                <DownloadAPP/>
                <Footer/>
            </div>
        )
    }

}

export default Offers;