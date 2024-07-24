import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>404 Error Page Not Found</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
