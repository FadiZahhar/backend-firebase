import React , {component} from "react";
import { Switch, Route, BrowserRouter } from "react-route-dom";
import Header from "./components/header";
import Footer from "./components/footer";

class Routes extends component {
    render(){
        return(
        <BrowserRouter>
            <Header />

            <Footer />
        </BrowserRouter>
        )
    }
}

export default Routes;