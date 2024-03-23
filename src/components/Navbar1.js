// To use the react-router-dom first we have to install - npm install react-router-dom in the present folder 
// give smalls when you are giving [to="/dashoard"] and not this -> [to="/Dashboard"]
import React from 'react'
import {Link} from 'react-router-dom'

const navbar1 = () => {
  return (
    <div>
        <center>
        <ul>
            <Link to="/profile"> <li>Profile</li> </Link>
            <Link to="/dashboard"> <li>Dashboard</li> </Link>
            <Link to="/logout"> <li>Logout</li> </Link>
        </ul>
        </center>
    </div>
  )
}

export default navbar1
