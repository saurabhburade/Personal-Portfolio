import React from "react";

function index() {
    return (
        <div
            className="d-flex align-items-center justify-content-between"
            style={{
                margin: "10% 15%",
            }}
            id="about"
        >
            <img
                src="/aboutMe.svg"
                alt="me"
                width={250}
                className="wow animate__animated animate__fadeInUp"
            />
            <div className="p-5">
                <h4 className="font-weight-bold wow animate__animated animate__fadeInUp">
                    A bit about me ;)
                </h4>
                <p className="wow animate__animated animate__fadeInUp">
                    Love to collaborate and develop amazing User Interfaces and
                    Web Applications. An awesome frontend developer with a
                    demonstrated history of working on ReactJS. Pursuing a
                    Bachelor of Engineering degree in Information Technology.
                    Developed some cool applications on MERN Stack and fond of
                    creating RESTful APIs in ExpressJS. Other than technical
                    things, I love to play Cricket, Chess, and Travel (Before
                    someone ate the Bat).
                </p>
            </div>
        </div>
    );
}

export default index;
