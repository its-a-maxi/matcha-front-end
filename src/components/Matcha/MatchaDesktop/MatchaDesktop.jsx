import React from 'react'
import { useState } from 'react'
import searchIcon from '../../../assets/icons/search.svg';
import MatchaProfileDesktop from './MatchaProfileDesktop';
import MatchaSearchDesktop from './MatchaSearchDesktop';
import '../Matcha.css';


function MatchaDesktop({profiles})
{
    const [search, setSearch] = useState("")

    return (
        <div className="bodyMatchaDesktop">
            <div className="searchBarContainerMatchaDesktop">
                <div className="searchBarMatcha">
                    <input type="text" className="searchBarInputMatcha" placeholder="Search by interests, location, age..."  value={search} onInput={e => setSearch(e.target.value)} />
                    <div className="searchIconMatchaDesktop">
                        <img src={searchIcon} alt="" className="icon white searchBarBtnMatcha"/>
                    </div>
                </div>
            </div>
            {search === "" ?
                <MatchaProfileDesktop profiles={profiles} /> :
                <MatchaSearchDesktop profiles={profiles} /> }
        </div>
    )
}

export default MatchaDesktop
