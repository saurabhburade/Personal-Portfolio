import React from "react";
import EducationCard from "./EducationCard";

function index() {
    return (
        <div >
            <h4
                id="education"
                className="text-center font-weight-bold wow animate__animated animate__fadeInUp"
                style={{
                    background: "url(/circle.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                My Education
            </h4>

            <div className="w-100 d-flex justify-content-center wow animate__animated animate__fadeInUp">
                <ul class="timeline">
                    <EducationCard
                        title={
                            "Bachelor of Engineering - Information Technoloy"
                        }
                        year={2021}
                        college={
                            " Shri Sant Gajanan Maharaj College of Engineering Shegaon"
                        }
                        university={"SGB Amravati University"}
                        gpa={"7.92 / 10"}
                    />
                    <EducationCard
                        title={"HSC - XII"}
                        year={2017}
                        college={"Nanaji Joshi Jr. College Shahapur"}
                        board={"Maharashtra State Board"}
                        percentile={"75.54 %"}
                    />
                    <EducationCard
                        title={"SSC - X"}
                        year={2015}
                        college={"Subodh Vidyalaya Masal"}
                        board={"Maharashtra State Board"}
                        percentile={"79.00 %"}
                    />
                </ul>
            </div>
        </div >
    );
}

export default index;
