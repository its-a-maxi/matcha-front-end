import userIcon from './assets/icons/user.svg';
import searchIcon from './assets/icons/search.svg';
import teaIcon from './assets/icons/tea.svg';
import './App.css';

import MatchaDesktop from './components/Matcha/MatchaDesktop';

function App() {
  return (
    <div className="App">
      <div className="container">
        {
         window.innerWidth > 800 ?
          <div className="matcha">
            <MatchaDesktop/>
          </div> :
          <p>MatchaPhone</p>
        }
        <div className="bottomBar">
          <div className="separator"></div>
          <div className="iconsContainer">
            <img src={userIcon} alt="" class="icon lightGreen"/>
            <img src={searchIcon} alt="" class="icon darkGreen"/>
            <img src={teaIcon} alt="" class="icon lightGreen"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
