import React from 'react'
import SocialBadge from './SocialBadge'
import Header from "./../Header";

function index() {
    return (
        <>
            <div
                style={{
                    height: "40vh",
                    background: "url(/pattern2.svg) no-repeat ",
                    backgroundSize: "cover",
                    padding: "2% 15%",
                }}
                className="d-flex flex-column  justify-content-center align-items-center"
            >
                <div className="w-100 ">
                    <h5 className="text-light mb-4">Connect With Me</h5>
                    <div className="w-50 d-flex">
                        <SocialBadge srcImage="/mail.svg" />
                        <SocialBadge srcImage="/github.svg" />
                        <SocialBadge srcImage="/linkedin.svg" />
                    </div>
                </div>
                <Header padding="1.5% 0%" />
            </div>

            <style jsx>{``}</style>
        </>
    );
}

export default index
