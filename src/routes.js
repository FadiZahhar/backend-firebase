import React , {component} from "react";
import { Switch, Route, BrowserRouter } from "react-route-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Login from "./components/login";
import Contact from "./components/contact";
import Home from "./components/home";


class Routes extends component {
    render(){
        return(
        <BrowserRouter>
            <Header />
            <Switch>

                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
        )
    }
}

export default Routes;