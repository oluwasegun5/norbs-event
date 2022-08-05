import React from "react";
import Container from "../../components/dashboard/Container";
import {Route,Routes} from "react-router-dom";
import MyEvents from "./pages/MyEvents";
import "./dashboard.css"
const Dashboard = () => {
    return(
        <div className='dashboardContainer'>
        <Container>
            <Routes>
                <Route path ="/" element ={<MyEvents/>}/>
            </Routes>
        </Container>
        </div>
    )
}

export default Dashboard