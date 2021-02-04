import React from 'react'

function ActivityCard({title,
session,
detail}) {
    return (
        <>
            <div className="w-100 bg-light d-flex justify-content-between align-items-center  mt-3 pr-4 pl-4 pt-3 pb-3 rounded wow animate__animated animate__fadeInUp">
                <div className=" d-flex justify-content-between align-items-center">
                    <img src="/checked.svg" width={40} alt="activity checked" />
                    <div className="w-100 flex-grow-1 p-4 text-break">
                        <p className=" m-0 font-weight-bold text-wrap">
                            {title}
                        </p>

                        <pre className="m-0 text-muted">{detail && detail}</pre>
                    </div>
                </div>
                <p className=" m-0 font-weight-bold text-nowrap">
                    {session || "...."}
                </p>
            </div>

            <style jsx>
                {`
                    p {
                        font-size: 1rem;
                    }
                    pre {
                        font-size: 0.8em;
                    }
                `}
            </style>
        </>
    );
}

export default ActivityCard
