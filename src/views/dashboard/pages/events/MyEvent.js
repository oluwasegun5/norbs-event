import React from "react";

const MyEvent = ({event}) => {

  return(
      <div className="event-cards">
          <div className="image-containers"
               style={{
                   backgroundImage:'url(https://images.pexels.com/photos/13145853/pexels-photo-13145853.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)'
          }}>

          </div>
          <div className="event-detail">
              <p>Event Title</p>
              <h5>{event.title}</h5>
              <p>Event Title</p>
              <h5>{event.description}</h5>
          </div>
          <div className="event-actions">
              <button>View Details</button>
          </div>
      </div>
  )
}

export default MyEvent