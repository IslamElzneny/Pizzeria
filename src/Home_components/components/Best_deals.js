import React,{Component} from "react";
import { DealOne } from "../../TheSharing_components/Best_Deals_components";
import { DealTwo } from "../../TheSharing_components/Best_Deals_components";
import { DealThree } from "../../TheSharing_components/Best_Deals_components";
import { HashLink } from "react-router-hash-link";
class Best_Deals extends Component{
    render(){
        return(
            <div className="best_deals">
                <div className="header_deal">
                    <h2>BEST DEALS!</h2>
                    <span><HashLink smooth to="/offers#offerPage">VIEW ALL</HashLink></span>
                </div>
                <div className="middle_content_deals">
                    <DealThree />
                </div>
                <div className="last_content_deals">
                    <DealOne />
                    <DealTwo/>
                </div>
            </div>
        )
    }
}
export default Best_Deals;