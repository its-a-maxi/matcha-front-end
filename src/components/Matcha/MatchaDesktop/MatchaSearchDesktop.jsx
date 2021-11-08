import React from 'react';
import { useState } from 'react'
import '../Matcha.css';

function MatchaSearchDesktop({profiles})
{
    const [index, setIndex] = useState(0)
    return (
        <div className="searchContainerMatchaDesktop">
            {profiles.map((profile) => 
                <div className="searchProfileContainerMatcha">
                    <img src={profile.imageURL} alt="" className="profilePictureMatcha" />
                </div>
            )}
        </div>
    )
}

export default MatchaSearchDesktop
