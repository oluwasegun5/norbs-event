import React, {useState} from "react";
import Preview from './Preview'
import CreateEventDetails from "../../../../components/dashboard/events/CreateEventDetails";
import "./createEvent.css"
import {useNavigate} from "react-router-dom";

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({})
    const navigate = useNavigate()
    return(
        <>
            <div className="createEventContainer">

                <div className="createEventSteps">
                    <a onClick={() => navigate("/dashbord")} style={{color: "var(--primary_green)"}}>Events </a>
                    <h5>Create Event Seamlessly</h5>

            <CreateEventDetails setEventDetails={setEventDetails} eventDetails={eventDetails} />
        </div>
          <Preview eventDetails = {eventDetails} />
      </div>
      </>
  )
}

export default CreateEvent