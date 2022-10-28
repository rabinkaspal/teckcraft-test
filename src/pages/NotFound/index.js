import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2 className="notfound">
        Page Not Found. <Link to="/">Go Back</Link>
      </h2>
    </>
  );
};

export default NotFound;
