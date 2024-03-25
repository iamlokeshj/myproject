import React from 'react'
import { useNavigate } from 'react-router-dom';
import leftimg from '../media/i1.png'
import logimg1 from '../media/i2.png'

var un = 'admin';
var pw = '123456';
var gun='', gpw='';

const Login = (props) => {

    
    var navigate = useNavigate();
   
    var validateUN = (e)=>
    {
      gun = e.target.value;
    }
    
    var validatePW = (e)=>
    {
      gpw = e.target.value;
    }
    
    //Manually get the values of gun and gpw and submit the form manually. 
    // here the menu change will be triggered. 
    var f1 = (e)=>{
      e.preventDefault();
      if(un===gun && pw===gpw)
      {
        var url = `/profile/`+un;
        navigate(url);
      }
      else
      {
        alert('Wrong username and password combo');
      }
    }

    return (
    <div>

       <div className='leftlogin'>
        <img src={logimg1} alt='loading problem..' className='logimg'/>
        <div className='loginform'>
            {/*<form action='/loginvalidate' method='get'>*/}
            <form onSubmit={f1}>
                <input className='inputt' type='text' placeholder='Enter username' name='uname' onChange={validateUN}/> <br/><br/>
                <input className='inputt' type='password'  placeholder='Enter password' name='pass' onChange={validatePW}/> <br/><br/>
                <input className='inputb' type='submit' value="Login"/>
            </form>

            <div className='rememberme'>
              <input type='checkbox' className='remembercheckbox' /> <label className='remembermelabel'>Remember me</label>
            </div>

            <a href='./forgot' className='forgotpwd'>Forgot password?</a>

        </div>
       </div>

       <div className='rightlogin'>
        <img src={leftimg} alt='loading problem..' className='leftimg'/>
       </div>

    </div>
  )
}

export default Login
