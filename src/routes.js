import React , {Component} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Login from "./components/login";
import Contact from "./components/contact";
import Home from "./components/home";


class Routes extends Component {
    render(){
        return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
        )
    }
}

export default Routes;