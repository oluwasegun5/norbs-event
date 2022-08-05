import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const Container = (pros) => {
    return(
        <>
            <SideNav />
            <div className="dashboardBodyContainer">
                <Header/>
                {pros.children}
            </div>
        </>
    )

}

export  default Container