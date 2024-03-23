import React from 'react'
import { Link } from 'react-router-dom'
const Menu1 = () => {
  return (
    <div>
        <center>
            <ul>
                <Link to="/"> <li>Home</li> </Link>
                <Link to="/about"> <li>About</li> </Link>
                <Link to="/login"> <li>Login</li> </Link>
            </ul>
        </center>
    </div>
  )
}

export default Menu1
