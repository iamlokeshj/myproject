// To use the react-router-dom first we have to install - npm install react-router-dom in the present folder 
// give smalls when you are giving [to="/dashoard"] and not this -> [to="/Dashboard"]
import React from 'react'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
const navbar = (props) => {
  return (
    <div>
        <center>
            {props.loggedin ? (<Menu2 /> ): (<Menu1/> )}
        </center>
    </div>
  )
}

export default navbar
