import React from 'react'
import { useSearchParams } from 'react-router-dom';
const Loginvalidate = () => {

  //Method 1
  const queryParameters = new URLSearchParams(window.location.search);
  const uname1 = queryParameters.get("uname");
  const pass1 = queryParameters.get("pass");

  //Method 2
  const [queryParams] = useSearchParams();
  const uname2 = queryParams.get("uname");
  const pass2 = queryParams.get("pass");

    return (
    <div>
        <center>
            <h1>Method 1 <br/>
            Welcome to profile user name  : {uname1}, password : {pass1} <br/>
            Method 2 <br/>
            <p>uname2: {uname2}</p>
            <p>pass2: {pass2}</p>
            </h1>
        </center>
    </div>
  )
}

export default Loginvalidate
