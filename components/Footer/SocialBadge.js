import React from 'react'

function SocialBadge({srcImage,href}) {
    return (
        <div className="social-badge mr-3" style={{ color: "white" }}>
            <a href={href || "#"}>
                <img src={srcImage} alt="social" />
            </a>
        </div>
    );
}

export default SocialBadge
