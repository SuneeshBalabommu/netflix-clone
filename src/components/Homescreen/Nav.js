import React, { useState,useEffect } from 'react';
import "./Nav.css";
function Nav() {
     const [show,handleShow]=useState(false)
     const transitionNavBar= () =>{
      if(window.scrollY > 100){
        handleShow(true);
      }
      else{
        handleShow(false);
      }
     };
     useEffect(() =>{
      window.addEventListener("scroll",transitionNavBar);
      return()=> window.removeEventListener("scroll",transitionNavBar);
     },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
      <img 
      className="nav_logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
      alt=""/>

      <img 
      className="nav_avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt=""/>
      </div>
    </div>
  );
}

export default Nav;