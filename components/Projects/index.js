import React from 'react'
import { projectsData } from './../../utils/constants';
import ProjectCard from './ProjectCard';

export default function index() {
    
    return (
        <div
            style={{
                margin: "1% 15%",
                padding:"5% 0%"
            }}
             id="projects"
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
                Things I have built
            </h4>

            <div className="d-flex justify-content-between flex-wrap ">
                {projectsData?.map((element, idx) => {
                    return <ProjectCard key={idx} {...element} />;
                })}
              
            </div>
        </div>
    );
}
