import React from "react";

export const SnsLinks = () => {
    return (
        <div className="SnsLinks">
            <TwitterLink />
            <FacebookLink />
        </div>
    );
};

const TwitterLink = () => {
    return (
        <a
            href="#"
            className="btn-social-long-twitter"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-twitter" />
            <span>Follow Me</span>
        </a>
    );
};

const FacebookLink = () => {
    return (
        <a
            href="#"
            className="btn-social-long-facebook"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-facebook" /> <span>Follow Me</span>
        </a>
    );
};
