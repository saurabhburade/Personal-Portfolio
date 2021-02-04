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
                id="social"
            >
                <div className="w-100 ">
                    <h5 className="text-light mb-4 wow animate__animated animate__fadeInUp">
                        Connect With Me
                    </h5>
                    <div className="w-50 d-flex wow animate__animated animate__fadeInUp">
                        <SocialBadge
                            srcImage="/mail.svg"
                            href="mailto:sburade3@gmail.com"
                        />
                        <SocialBadge
                            srcImage="/github.svg"
                            href="https://github.com/saurabhburade"
                        />
                        <SocialBadge
                            srcImage="/linkedin.svg"
                            href="https://www.linkedin.com/in/saurabh-burade-8371ab182/"
                        />
                    </div>
                </div>
                <Header padding="1.5% 0%" />
            </div>

            <style jsx>{``}</style>
        </>
    );
}

export default index
