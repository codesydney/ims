import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

/* 
    App component handling routing
*/

const App = () => {
    return (
        <BrowserRouter>
            <Layout></Layout>
        </BrowserRouter>
    );
};

export default App;
