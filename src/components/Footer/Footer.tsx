import React from "react";

import "./Footer.css";
import { SnsLinks } from "./SnsLinks";

export const Footer = () => {
    return (
        <div className="Footer">
            <footer className="Footer-display">
                <SnsLinks />
            </footer>
        </div>
    );
};
