import React from 'react'

export default function EducationCard({
    
    year,
college,
university,
gpa,
percentile,
board,
    title
}) {
    return (
        <li>
            <div class="timeline-badge d-flex justify-content-center align-items-center">
                <p
                    className="m-0 font-weight-bold"
                    style={{ fontSize: "0.7em" }}
                >
                    {year}
                </p>
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h5 class="timeline-title font-weight-bold">
                        {title}
                    </h5>
                    <p className="m-0">
                        <small class="text-muted">
                            College :
                            <span class="ml-3 font-weight-bold">{college}</span>
                        </small>
                    </p>
                    <small class="text-muted">
                        Universiy/Board :{" "}
                        <span class="ml-3 font-weight-bold">{university || board}</span>
                    </small>
                    <p className="m-0">
                        <small class="text-muted">
                            Avg GPA/Percentile :
                            <span class="ml-3 font-weight-bold">{gpa || percentile}</span>
                        </small>
                    </p>
                </div>
            </div>
        </li>
    );
}
