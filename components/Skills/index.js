import React from 'react'

export default function index() {
    return (
        <div style={{ height: "100%", padding: "1.5% 15%" }} id="skills">
            <h4 className="font-weight-bold mt-5 mb-5 text-center wow animate__animated animate__fadeInUp">
                {" "}
                Technologies I work on
            </h4>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <img className="wow animate__animated animate__fadeInUp" src="/skillIcons/react.svg" alt="React.js" />
                <img  className="wow animate__animated animate__fadeInUp"  src="/skillIcons/redux.svg" alt="redux.js" />
                <img  className="wow animate__animated animate__fadeInUp"  src="/skillIcons/next.svg" alt="next.js" />
                <img  className="wow animate__animated animate__fadeInUp"  src="/skillIcons/express.svg" alt="express" />
                <img  className="wow animate__animated animate__fadeInUp"  src="/skillIcons/mongodb.svg" alt="mongodb" />
                <img  className="wow animate__animated animate__fadeInUp"  src="/skillIcons/nodejs.svg" alt="nodejs" />
                <img  className="wow animate__animated animate__fadeInUp"  src="/skillIcons/github.svg" alt="github" width={50} />
            </div>
        </div>
    );
}
