import React, {useState} from "react";
import './styles.css';

const NavBar = () =>{
    const [showMenu, setShowMenu] = useState(false);


    const ToggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="nav-container">
            <div className="nav-title">Tech Sale</div>
            {showMenu ? 
                <div className="nav-list">
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Online Shop</div>
                    <div className="nav-item">In-Person Brochure</div>
                    <div className="nav-item">Contact</div>
                </div>
            : null
            }
            
            <div onClick={ToggleMenu} className="nav-btn">
                {
                    showMenu ? "Menu" : "Close"
                }
            </div>
        </div>
    )
}

export default NavBar;