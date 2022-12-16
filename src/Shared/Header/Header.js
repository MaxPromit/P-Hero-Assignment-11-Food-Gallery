import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Context/AuthProvider";
import food from '../../image/foodGallery-removebg-preview.png'
const Header = () => {
  const {user,logOut} = useContext(AuthContex)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="w-20" to='/'><img src={food} alt="" /></Link>
        <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            { user?.email ? <>
            <Link onClick={logOut}>Logout</Link>
            <Link to='/myReviews'>My Reviews</Link>
            <Link to='/addService'>Add Service</Link>
             </>: 
            <Link to='/login'>Login</Link>
            }
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
      </ul>
    </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            { user?.email ? <>
            <Link onClick={logOut}>Logout</Link>
            <Link to='/myReviews'>My Reviews</Link>
            <Link to='/addService'>Add Service</Link>
             </>: 
            <Link to='/login'>Login</Link>
            }
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.displayName}
        <div>
        <img className="w-10 mx-2 rounded-full" src={user?.photoURL} alt="" />
        </div>
        {/* <button className="btn btn-info">Get Started</button> */}
      </div>
    </div>
  );
};

export default Header;
