import React from "react";

export default function index({ padding }) {
    return (
        <div
            className="w-100 d-flex justify-content-between align-items-center wow animate__animated animate__fadeIn"
            style={{ padding: padding || "1.5% 15%", color: "white" }}
        >
            <div className="m-0 logo">
                <h4 className="font-weight-bold m-0">Saurabh Burade</h4>
            </div>
            <nav
                className="nav-menu d-flex align-items-center"
                style={{ listStyleType: "none" }}
            >
                <li className="m-0 ml-4">
                    <a href="#skills">Skillset</a>
                </li>
                <li className="m-0 ml-4">
                    <a href="#about">About</a>
                </li>
                <li className="m-0 ml-4">
                    <a href="#education">Education</a>
                </li>
                <li className="m-0 ml-4">
                    <a href="#projects">Projects</a>
                </li>
                <li className="m-0 ml-4">
                    <a href="#activities">Activities</a>
                </li>
                <li className="m-0 ml-4">
                    <a href="#social"> Social & Contact</a>
                </li>
            </nav>
        </div>
    );
}
