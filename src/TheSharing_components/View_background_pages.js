import React from "react";
import { HashLink } from "react-router-hash-link";
const View_background_pages=(props)=>{
    if(props.buttons==true){
        return(
            <div className={props.className}>
                <div className="overlayer">
                    <div className="header_view">
                        <h1> {props.headerTittle} </h1>
                    </div>
                    <div className="content_view">
                        <p> {props.content} </p>
                    </div>
                    <div className="booking">
                        <span className="bookTable"><HashLink smooth to="/contact#contact">BOOK A TABLE</HashLink></span>
                        <span className="takeaway"><HashLink smooth to="/contact#contact">TAKEAWAY</HashLink></span>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="view_page">
                <div className="overlayer">
                    <div className="header_view">
                        <h1> {props.headerTittle} </h1>
                    </div>
                    <div className="content_view">
                        <p> {props.content} </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default View_background_pages;