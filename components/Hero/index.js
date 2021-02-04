import React from "react";

function index() {
    return (
        <div
            className="w-100 d-flex justify-content-between align-items-center"
            style={{
                height: "100%",
                padding: "1.5% 15%",

                color: "white",
            }}
        >
            <div className="hero-text ">
                <p
                    className="m-0 wow animate__animated animate__fadeInUp"
                    style={{ fontWeight: "500" }}
                >
                    Hey There , I am
                </p>
                <h3 className="font-weight-bold mt-3 mb-3 wow animate__animated animate__fadeInUp">
                    Saurabh Burade
                </h3>
                <p
                    className="m-0  wow animate__animated animate__fadeInUp"
                    style={{ fontWeight: "500" }}
                >
                    Enthusiastic Web Developer
                </p>
                <p
                    className="m-0 wow animate__animated animate__fadeInUp"
                    style={{ fontWeight: "500" }}
                >
                    Love to collaborate and create amazing User Interfaces.
                </p>
                <div className="d-flex mt-3 wow animate__animated animate__fadeInUp">
                    <a
                        className="btn btn-light mr-3 btn-md btn-outline-dark"
                        href="https://drive.google.com/file/d/1ORBnAQ_XgFFvcXNphrUQp__n37Civh26/view?usp=sharing"
                    >
                        Download Resume
                    </a>
                    <a
                        className="btn btn-light btn-md btn-outline-dark mr-3"
                        href="#projects"
                    >
                        {" "}
                        Go to Projects
                    </a>
                    <a
                        className="btn btn-light mr-3 btn-md btn-outline-dark"
                        href="https://github.com/saurabhburade"
                    >
                        Goto Github
                    </a>
                </div>
            </div>
            <img
                width={350}
                className="wow animate__animated animate__fadeInRight"
                src={"/userHeroImage.svg"}
            />
        </div>
    );
}

export default index;
