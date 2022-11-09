import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Context/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContex)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost" to='/'>Food Gallery</Link>
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
        <button className="btn btn-info">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
