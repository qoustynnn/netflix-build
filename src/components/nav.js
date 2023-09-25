import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "./nav.css";

function Nav() {

const [show, handleShow] = useState(false);

const navigate = useNavigate();

const transitionNavBar = () => {
    if (window.scrollY > 30){
        handleShow(true);
    } else {
        handleShow(false);
    }
}

const bgBlack = {
  backgroundColor: 'black'
}

useEffect(()=>{
window.addEventListener('scroll', transitionNavBar);
return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    <div className={`nav bg-black-transparent  ${show && "bg-black"}`}>
      <div className="nav-content">
        <img
        onClick={() => navigate('/')}
          className="nav-logo clickable"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FNetflix-Logo.png&f=1&nofb=1&ipt=3b73cc5695acf3cfb157a6584466c254873bdee1eafeac8fe68070d9c6668394&ipo=images"
          alt="netflix logo"
        />
        <img
          onClick={()=> navigate("/profile")}
          className="nav-avatar clickable"
          src="https://i.pinimg.com/236x/fe/85/b7/fe85b7ab9e5c2ff02a4972409daf2128.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
