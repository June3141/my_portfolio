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
            href="https://twitter.com/Minaduki0620"
            className="btn-social-long-twitter"
            target="_new"
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
            href="https://www.facebook.com/ryoushi.3141"
            className="btn-social-long-facebook"
            target="_new"
            rel="noopener noreferrer"
        >
            <i className="fab fa-facebook" /> <span>Follow Me</span>
        </a>
    );
};
