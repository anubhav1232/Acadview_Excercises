import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
 const Navbar  = (props) => {
//   console.log(props);
//   setTimeout(()=>{
//     props.history.push('./');
//   },2000);
  return(
    <nav className='nav-wrapper cyan'>
    <a href='/' className='brand-logo'>Project-1 </a>
    <ul className='right'>
      <li><Link to ='/'> Home</Link></li>
      <li><NavLink to='/Person'> Person</NavLink></li>
    </ul>
    </nav>
  )
}
export default withRouter(Navbar);
