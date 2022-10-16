import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div>
      <h3>PAGE NOT FOUND</h3>
      <Link to="/"> Return To Home</Link>
    </div>
  );
};

export default NotFound;
