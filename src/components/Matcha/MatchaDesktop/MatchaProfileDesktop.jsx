import React from 'react'
import { useState } from 'react'

import likeIcon from '../../../assets/icons/like.svg';
import passIcon from '../../../assets/icons/close.svg';
import '../Matcha.css';

function MatchaProfileDesktop({profiles})
{
    const [index, setIndex] = useState(0)

    const getnext = () => {
        if(!profiles[index + 1])
            setIndex(0);
        else
            setIndex(index + 1);
    }

    return (
        <div>
            <div className="btnsMatchaDesktop">
                <div className="passBtnMatchaDesktop"
                onMouseEnter={() => { document.getElementById("passBtn").style.opacity="100%" }}
                onMouseLeave={() => { document.getElementById("passBtn").style.opacity="0%" }}
                onClick={() => { getnext() }}>
                    <div className="passIconContainerMatcha">
                        <img src={passIcon} alt="" className="icon darkGreen" />
                    </div>
                    <div className="passIconContainerMatcha">
                        <img src={passIcon} alt="" className="icon white" style={{opacity: "0%"}} id="passBtn" />
                    </div>
                </div>
                <div className="likeBtnMatchaDesktop"
                onMouseEnter={() => { document.getElementById("likeBtn").style.opacity="100%" }}
                onMouseLeave={() => { document.getElementById("likeBtn").style.opacity="0%" }}
                onClick={() => { getnext() }}>
                    <div className="likeIconContainerMatcha">
                        <img src={likeIcon} alt="" className="icon lightGreen" />
                    </div>
                    <div className="likeIconContainerMatcha">
                        <img src={likeIcon} alt="" className="icon white" style={{opacity: "0%"}} id="likeBtn" />
                    </div>
                </div>
            </div>
            <div className="profileContainerMatchaDesktop">
                <img src={profiles[index].imageURL} alt="" className="profilePictureMatcha" />
                <div className="profileGradientMatcha"></div>
                <p className="profileName">{profiles[index].name + ", " + profiles[index].age}</p>
                <p className="profileStatus">{profiles[index].status}</p>
            </div>
        </div>
    )
}

export default MatchaProfileDesktop
