import userIcon from './assets/icons/user.svg';
import searchIcon from './assets/icons/search.svg';
import teaIcon from './assets/icons/tea.svg';
import './App.css';

import MatchaDesktop from './components/Matcha/MatchaDesktop/MatchaDesktop';


function App()
{
  let profiles = [{
    imageURL: "https://images.unsplash.com/photo-1635713150362-ed0cd425e697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Rebecca",
    age: 25,
    status: "WiFi, food, my bed, snuggles. Perfection."
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1635549298330-186987c31a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sara",
    age: 25,
    status: "There is only one happiness in life—to love and be loved."
  },{
    imageURL: "https://i.pinimg.com/474x/fc/da/59/fcda5953c00ed4604a9bc1e9e1f64b01--princess-leia-carrie-fisher.jpg",
    name: "Princess Leia",
    age: 29,
    status: "Aren't you a little short for a stormtrooper?"
  },{
    imageURL: "https://images.unsplash.com/photo-1634510019952-a1a82d969f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Marcia",
    age: 23,
    status: "Dream big and dare to fail."
  }];

  return (
    <div className="App">
      <div className="container">
        {
         window.innerWidth > 800 ?
          <div className="matcha">
            <MatchaDesktop profiles={profiles}/>
          </div> :
          <p>MatchaPhone</p>
        }
        <div className="bottomBar">
          <div className="separator"></div>
          <div className="iconsContainer">
            <img src={userIcon} alt="" className="icon lightGreen"/>
            <img src={searchIcon} alt="" className="icon darkGreen"/>
            <img src={teaIcon} alt="" className="icon lightGreen"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
