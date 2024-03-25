import React from 'react'
import { Link } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
import mylogo from '../media/i2.png'
import ninedots from '../media/i3.png'
import notific from '../media/i4.png'
import profi from '../media/i5.png'
const Menu1 = () => {
  //var {uname} = useParams();
  //var url = `/profile/`+uname;
  return (
    <div>
        <ul>
            <Link to="/" className='ninedots'> <li><img  src={ninedots} alt='problem loading...' width="35px" height="35px"/></li> </Link>
            <Link to="/" className='menulogo'> <li><img src={mylogo}  alt='problem loading...' width="200px"/></li> </Link>

            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Home</li> </Link>
            </div>

            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Contacts <img src={require('../media/i9.png')} width="20" height="20"  alt='i9' className='submenudownarrow'/> </li> </Link>
              <ol className='submenu'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>

            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Activities <img src={require('../media/i9.png')} width="20" height="20"  alt='i9' className='submenudownarrow'/> </li> </Link>
              <ol className='submenu'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>

            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Tasks <img src={require('../media/i9.png')} width="20" height="20"  alt='i9' className='submenudownarrow'/> </li> </Link>
              <ol className='submenu'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>

            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Tracking <img src={require('../media/i9.png')} width="20" height="20"  alt='i9' className='submenudownarrow'/> </li> </Link>
              <ol className='submenu'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>


            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Attendance <img src={require('../media/i9.png')} width="20" height="20"  alt='i9' className='submenudownarrow'/> </li> </Link>
              <ol className='submenu'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>


            <div className='itemnsubitemdiv'>
              <Link to="/dashboard"> <li>Dashboard <img src={require('../media/i9.png')} width="20" height="20"  alt='i9' className='submenudownarrow'/> </li> </Link>
              <ol className='submenu'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>


            <div className='itemnsubitemdivlastitem'>
              <Link to="/" className='lastitem1'> <li><img  src={notific} alt='problem loading...' width="25px"/></li> </Link>
              <ol className='submenulast'>
                <li>subitem2</li>
                <li>subitem3</li>
                <li>subitem4</li>
              </ol>
            </div>

            <div className='itemnsubitemdivlastitem'>
              <Link to="/logout" className='lastitem2'> <li><img  src={profi} alt='problem loading...' width="30px" /></li> </Link>
              <ol className='submenulast sl'>
                <li>subitem2</li>
                <li>subitem3</li>
                <Link to="/logout"> <li>Logout</li> </Link>
              </ol>
            </div>

        </ul>
    </div>
  )
}

export default Menu1
