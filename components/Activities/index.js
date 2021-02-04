import React from 'react'
import { activitiesData } from '../../utils/constants';
import ActivityCard from './ActivityCard';

function index() {
    return (
        <div
            style={{
                margin: "10% 15%",
            }}
            id="activities"
        >
            <h4
                className="text-center font-weight-bold mb-5 wow animate__animated animate__fadeInUp"
                style={{
                    background: "url(/circle.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                Activities & Achievements
            </h4>
            <div
                style={{
                    padding: "5%",
                    border: "5px dotted #f0f0f0",
                    borderRadius: "10px",
                }}
            >
                {activitiesData?.map((element, idx) => {
                    return <ActivityCard key={idx} {...element} />;
                })}
            </div>
        </div>
    );
}

export default index
