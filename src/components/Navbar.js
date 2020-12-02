import React, {useEffect, useState} from 'react';
import './Navbar.css'

function Navbar(props) {
    const [show,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);
            }else handleShow(false)
        });
        return ()=>{
            window.removeEventListener("scroll")
        }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="Netflix-logo.png"/>
            <img className="nav__avatar" src="avatar.png"/>
        </div>
    );
}

export default Navbar;