import React from "react";

export default function ProjectCard({
    technologies,
    code,
    live,
    imageUrl,
    title,
}) {
    return (
        <>
            <div className="mr-3 project-card mb-5 wow animate__animated animate__fadeInUp">
                <img src={"/projectImages/" + imageUrl} alt={title || "project image"} />
                <div
                    className="pr-4 pl-4 pt-2 pb-3  d-flex flex-column justify-content-between"
                    style={{ borderTop: "2px solid gainsboro", flexGrow: 1 }}
                >
                    <p className="m-0 font-weight-bold">{title || "..."}</p>
                    <div className="w-100 d-flex flex-row mt-1 flex-wrap">
                        {technologies?.map((element, idx) => {
                            return (
                                <span
                                    key={idx}
                                    class="badge  badge-info mr-3 mt-2"
                                >
                                    {element || "..."}
                                </span>
                            );
                        })}
                    </div>
                    <div className="w-100 d-flex  mt-3">
                        <a href={live || "#"}>
                            <button className="btn btn-sm btn-light btn-outline-primary  mr-3">
                                Goto Live Link
                            </button>
                        </a>
                        <a href={code || "#"}>
                            <button className="btn btn-sm btn-light btn-outline-primary  mr-3">
                                Goto Code {"</>"}
                            </button>{" "}
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .project-card {
                        background: #ffffff;
                        width: 20em;
                        min-height: 18em;
                        border-radius: 5px;
                        border: none;
                        box-shadow: 0px 5px 55px #d8d8d8;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    img {
                        width: 100%;
                    }
                `}
            </style>
        </>
    );
}
