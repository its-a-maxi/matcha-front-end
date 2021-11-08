import React from 'react'
import searchIcon from '../../assets/icons/search.svg';
import likeIcon from '../../assets/icons/like.svg';
import passIcon from '../../assets/icons/close.svg';
import './Matcha.css';
let profile = {
    imageURL: "https://images.unsplash.com/photo-1635713150362-ed0cd425e697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Rebecca",
    age: 25,
    status: "WiFi, food, my bed, snuggles. Perfection."
}

function MatchaDesktop() {

    return (
        <div className="bodyMatchaDesktop">
            <div className="searchBarContainerMatchaDesktop">
                <div className="searchBarMatcha">
                    <input type="text" className="searchBarInputMatcha" placeholder="Search by interests, location, age..."/>
                    <div className="searchIconMatchaDesktop">
                        <img src={searchIcon} alt="" className="icon white searchBarBtnMatcha" />
                    </div>
                </div>
            </div>
            <div className="btnsMatchaDesktop">
                <div className="passBtnMatchaDesktop">
                    <div className="passIconContainerMatcha">
                        <img src={passIcon} alt="" className="icon darkGreen" />
                    </div>
                </div>
                <div className="likeBtnMatchaDesktop">
                    <div className="likeIconContainerMatcha">
                        <img src={likeIcon} alt="" className="icon lightGreen" />
                    </div>
                </div>
            </div>
            <div className="profileContainerMatchaDesktop">
                <img src={profile.imageURL} alt="" className="profilePictureMatcha" />
                <p className="profileName">{profile.name + ", " + profile.age}</p>
                <p className="profileStatus">{profile.status}</p>
            </div>
        </div>
    )
}

export default MatchaDesktop
