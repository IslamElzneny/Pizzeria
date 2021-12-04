import React,{Component} from "react";
import ViewBackground from '../TheSharing_components/View_background_pages';
import View_Page_OURMENUE from "./Components/View_page_ourMenu";
import Pasta_Menu from "./Components/PastaMenu";
import Pizza_Menu from "./Components/PizzaMenu";
import Dessert_Menu from "./Components/dessertMenu";
import { Location } from "../TheSharing_components/location";
import DownloadAPP from "../TheSharing_components/Download_app";
import Footer from "../TheSharing_components/Footer";
class Menu extends Component{
    state={
        headerTittle:"OUR MENU", 
        content:"",
        buttomsBook:false
      }
    render(){
        return(
            <div className="container_menu">
                <div className="menu half_view_page">
                    <ViewBackground headerTittle={this.state.headerTittle} content={this.state.content} buttons={this.state.buttomsBook} />
                </div>
                <View_Page_OURMENUE/>
                <Pasta_Menu/>
                <Pizza_Menu/>
                <Dessert_Menu/>
                <Location />
                <DownloadAPP />
                <Footer />
            </div>
        )
    }

}
export default Menu;