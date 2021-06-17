import React from "react";
import error from "../../Assets/error.jpg"
import '../../App.css'
const Error = () => {
  return(
      <div className="error">
              <h1>error 404</h1>
          <img src={error} alt="error" />
      </div>);
};

export default Error;
