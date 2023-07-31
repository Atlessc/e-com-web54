import React from "react";

const NavBar = () =>{
    const [showMenu, setShowMenu] = useState;

    const ToggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="NavContainer">
            <div onClick={ToggleMenu} className="NavBtn">
                {
                    showMenu ? "Menu" : "Close"
                }
            </div>
            <div className="Nav-list">
                <div className="nav-item">Home</div>
                <div className="nav-item">Online Shop</div>
                <div className="nav-item">In-Person Brochure</div>
                <div className="nav-item">Contact</div>
            </div>
        </div>
    )
}

export default NavBar;