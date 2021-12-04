import React from "react";
import View_All_Menu from "../../TheSharing_components/ViewAllMenu";
const Flavor=()=>{
    return(
        <div className="choose_your_flavor" >
            <div className="header">
                <h4 className="title">CHOOSE YOUR FLAVOR</h4>
                <h3 className="discription_title">FOOD THAT BRINGS PEOPLE TOGETHER!</h3>
                <p className="content">Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper dictumst sit interdum ut venenatis pellentesque nunc.</p>
            </div>
            <div className="view_menu">
                <h4>VIEW ALL MENU</h4>
            </div>
            <View_All_Menu/>
        </div>
    )
}
export default Flavor;