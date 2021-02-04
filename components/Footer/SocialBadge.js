import React from 'react'

function SocialBadge({srcImage}) {
    return (
        <div className="social-badge mr-3" style={{color:"white"}}>
            <img src={srcImage} alt=""/>
        </div>
    )
}

export default SocialBadge
