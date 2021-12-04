import React ,{Component} from "react";
import Home from "./Home_components/Page_home";
import Menu_bar from "./Home_components/components/Menu_bar";
import OurMenu from "./OurMenu_components/Page_menu";
import About from './About_components/Page_about';
import Offers from './Offers_components/Page_offers';
import Contact from './Contact_components/Page_contact';
import ErrorPage from "./ErrorPage";
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
         <Menu_bar/>
         <Route exact path="/" component={Home} />
         <Route path="/menu" component={OurMenu} />
         <Route path="/about" component={About} />
         <Route path="/offers" component={Offers} />
         <Route path="/contact" component={Contact} />

      </BrowserRouter>
    )
  }
}

export default App;
