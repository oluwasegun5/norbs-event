import React, {useState,useEffect} from "react";
import "./myEvents.css"
import MyEvent from "./MyEvent";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setEvents} from "../../../../redux/actions/index"
import {useNavigate} from "react-router-dom";

const MyEvents = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {events: eventData} = useSelector((state) => state.eventReducer)

    useEffect(()=>{
        eventData.length < 1 && axios.get("http://localhost:5000/fakeEvents")
        .then((result) => dispatch(setEvents(result.data)))
            .catch((error) => console.log(error))
    },[])

    return(
        <div className="my-events-container">
            <div className="my-events-header">
                <div className="my-events-header-filter">
                    <div>
                        <p>Filter By:</p>
                        <input type="date" id="filter-date"/>
                    </div>
                    <div>
                        <p>Search Events</p>
                        <input type="search" id="filter-search"/>
                    </div>
                </div>

                <button>Create Event</button>
            </div>

            <div className="my-events-cards">
                {eventData.length > 0
                ? eventData.map((event) => <MyEvent event={event}/>)
                    : <h5 style={{textAlign: 'center'}}>No Event</h5>}
            </div>
        </div>
    )
}

export  default  MyEvents