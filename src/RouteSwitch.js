import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./component/Footer";
import RandomMain from "./component/random/RandomMain";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/random" element={<RandomMain />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouteSwitch;