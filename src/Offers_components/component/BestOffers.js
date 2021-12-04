import React from "react";
import { DealOne } from "../../TheSharing_components/Best_Deals_components";
import { DealTwo } from "../../TheSharing_components/Best_Deals_components";
import { DealThree } from "../../TheSharing_components/Best_Deals_components";
import { HOSTAPARTY } from "../../TheSharing_components/Best_Deals_components";
const Best_offers=()=>{
    return(
        <div className="best_deals" id="offerPage">
            <div className="header_deal">
                <h2>BEST DEALS!</h2>
            </div>
            <div className="middle_content_deals">
                <DealThree />
            </div>
            <div className="last_content_deals">
                <DealOne />
                <DealTwo/>
            </div>
            <div className="book_party_offers">
                <HOSTAPARTY/>
            </div>
        </div>
    )
}
export default Best_offers;