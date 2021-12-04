import React from "react";

export const DealOne=()=>{
    return(
        <div className="dealOne" id="currentDeals">
            <div className="discount">
                <h3>SAVE<span>30%</span></h3>
            </div>
            <div className="discription_deal">
                <h3>COMBO DOUBLE<span>BOX</span></h3>
                <span>$24</span>
            </div>
        </div>
    )
}
export const DealTwo=()=>{
    return(
        <div className="dealTwo">
            <div className="discount">
                <h3>SAVE<span>25%</span></h3>
            </div>
            <div className="backlayer"></div>
            <div className="discription_deal">
                <h3>VEGGIE DELIGH</h3>
                <p>STARTING AT</p>
                <h4>$16</h4>
            </div>
        </div>
    )
}
export const DealThree=()=>{
    return(
        <div className="dealThree">
            <div className="discount">
                <h3>SAVE<span>35%</span></h3>
            </div>
            <div className="backlayer"></div>
            <div className="discription_deal">
                <span>DAILY DEAL!</span>
                <h3>BIG MEAT MONSTA</h3>
                <p>Nunc tellus pellentesque ut est fames vitae dui posuere.</p>
                <h4>$18</h4>
            </div>
        </div>
    )
}

export const HOSTAPARTY=()=>{
    return(
        <div className="HostAParty">
            <div className="discription_deal">
                <h3>HOST A PARTY!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                <span>GET IN TOUCH</span>
            </div>
        </div>
    )
}
