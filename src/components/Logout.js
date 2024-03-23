import React from 'react'
import { useNavigate } from 'react-router-dom';
const Logout = (props) => {
  var navigate = useNavigate();
  var f1=()=>
  {
    navigate('/');
  }
  setTimeout(f1,0);
  return (
    <div>
      <center>
        <h1>Visit again thank you. You will be redirected to login page 5 secs </h1>
      </center>
    </div>
  )
}

export default Logout
