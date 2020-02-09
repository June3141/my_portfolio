import React from "react";

import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";

const App = () => {
    return (
        <div className="App">
            <Header />
            <body className="Content">
                <Content />
            </body>
            <Footer />
        </div>
    );
};

export default App;
