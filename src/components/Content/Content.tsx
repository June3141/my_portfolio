import React from "react";

import "./Content.css";
import { Profile } from "./Profile";
import { MyWorks } from "./MyWorks";

export const Content = () => {
    return (
        <div style={{ width: "100%" }}>
            <Profile />
            <MyWorks />
        </div>
    );
};
