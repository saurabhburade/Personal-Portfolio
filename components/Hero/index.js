import React from "react";
function index() {
    return (
        <div
            className="w-100 d-flex justify-content-between align-items-center"
            style={{
                height: "100%",
                padding: "1.5% 15%",
            }}
        >
            <div className="hero-text">
                <p className="m-0" style={{ fontWeight: "500" }}>
                    Hey There , I am
                </p>
                <h3 className="font-weight-bold mt-3 mb-3">Saurabh Burade</h3>
                <p className="m-0" style={{ fontWeight: "500" }}>
                    Enthusiastic Web Developer
                </p>
                <p className="m-0" style={{ fontWeight: "500" }}>
                    Love to collaborate and create amazing User Interfaces.
                </p>
                <div className="d-flex mt-3">
                    <button className="btn btn-primary mr-3 btn-sm">
                        Download Resume
                    </button>
                    <button className="btn btn-primary btn-sm">
                        {" "}
                        Go to Projects
                    </button>
                </div>
            </div>
            <img width={350} src={"/userHeroImage.svg"} />
            <div
                class="LI-profile-badge"
                data-version="v1"
                data-size="medium"
                data-locale="en_US"
                data-type="vertical"
                data-theme="dark"
                data-vanity="saurabh-burade-8371ab182"
            >
                <a
                    class="LI-simple-link"
                    href="https://in.linkedin.com/in/saurabh-burade-8371ab182?trk=profile-badge"
                >
                    Saurabh Burade
                </a>
            </div>
        </div>
    );
}

export default index;
