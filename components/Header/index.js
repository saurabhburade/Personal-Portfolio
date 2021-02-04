import React from "react";

export default function index({padding}) {
    return (
        <div
            className="w-100 d-flex justify-content-between align-items-center "
            style={{ padding: padding || "1.5% 15%", color: "white" }}
        >
            <div className="m-0 logo">
                <h4 className="font-weight-bold m-0">Saurabh Burade</h4>
            </div>
            <nav
                className="nav-menu d-flex align-items-center"
                style={{ listStyleType: "none" }}
            >
                <li className="m-0 ml-4">Skillset</li>
                <li className="m-0 ml-4">About</li>
                <li className="m-0 ml-4">Education</li>
                <li className="m-0 ml-4">Projects</li>
                <li className="m-0 ml-4">Activities</li>
                <li className="m-0 ml-4">Social & Contact</li>
            </nav>
        </div>
    );
}
