import React from 'react'

export default function index() {
    return (
        <div style={{ height: "100%", padding: "1.5% 15%" }}>
            <h4 className="font-weight-bold mt-5 mb-5 text-center">
                {" "}
                Technologies I work on
            </h4>
            <div className="w-100 d-flex justify-content-between align-items-center">
                <img src="/skillIcons/react.svg" alt="React.js" />
                <img src="/skillIcons/redux.svg" alt="redux.js" />
                <img src="/skillIcons/next.svg" alt="next.js" />
                <img src="/skillIcons/express.svg" alt="express" />
                <img src="/skillIcons/mongodb.svg" alt="mongodb" />
                <img src="/skillIcons/nodejs.svg" alt="nodejs" />
                <img src="/skillIcons/github.svg" alt="github" width={50} />
            </div>
        </div>
    );
}
