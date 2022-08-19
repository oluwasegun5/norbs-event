import React, {useState} from "react";
import {BsList} from "react-icons/bs";
import {BsFillWalletFill} from "react-icons/bs";


const SideNav = () => {
    const [width, setWidth] = useState("15%")
    const [activeLink, setActiveLink] = useState(null)
    let activeStyle = {backgroundColor: "#474747",color: 'var(--primary_green)'}

    const links = ["events", "analytics", "marketing"]

    function toggleWidth() { width === "15%" ? setWidth("5%"): setWidth("15%") }

    return(
        <div className='dashboardSideNav' style={{width: width}}>
            <div className="sideNavLogoSection">
                <div id="sideNavLogo">
                    N
                </div>
                <div id="sideNavHamburger">
                    <BsList color='white' fontSize={20} onClick={toggleWidth} cursor='pointer'/>
                </div>
            </div>
            <div className="sideNavLinks">
                <div className="links">
                    {links.map((link, index) =>
                        <button className='link'
                                key={index}
                                onClick={() => setActiveLink(link)}
                                style={activeLink === link ? activeStyle : {color: 'white'}}>
                            <BsFillWalletFill fontSize={15}
                                 style={width==='120%'&&{marginRight: "15px"}}
                                 color={activeLink === link ? 'var(--primary_green)' : 'white'}/>
                            {width==='15%'&& link}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )

}

export  default SideNav
