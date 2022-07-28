import React from "react";

const StepContainer = ({children, step, headerTitle}) => {
  return(
      <div className="registration-step-container">
          <div className="header-container">
              <p>{headerTitle}</p>
              <div className="step-icon">
                  {`Step ${step}`}
              </div>
              {children}
          </div>
      </div>
  )
}

export default StepContainer