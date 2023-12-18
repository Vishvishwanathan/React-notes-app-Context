import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useAuthentication } from "../Contexts/Authentication.context";

export default function Navbar ({onLogin=()=>{}}){
  const { loggedIn,setLoggedIn} = useAuthentication();
  const Navigate = useNavigate ();
  
    return (
        <div className="Navbar-content">
      <ul className="lists">
      <h2>Notes App</h2>
          <h6>Note@gmail.com</h6>
        <li className="list">
          <Link className="nav-link" to={"/Home"}>
            <i className="bi bi-house-door icon"></i>
            <span className="link">Home</span>
          </Link>
        </li>
        <li className="list">
          <Link className="nav-link">
            <i className="bi bi-search icon"></i>
            <span className="link">Search</span>
          </Link>
        </li>
        <li className="list">
          <Link className="nav-link" to={"/Notes"}> 
            <i className="bi bi-file-earmark-text icon"></i>
            <span className="link">Notes</span>
          </Link>
        </li>
        <li className="list">
          <Link className="nav-link"  to={"/Task"}>
            <i className="bi bi-check2-circle icon"></i>
            <span className="link">Task</span>
          </Link>
        </li>
        <li className="list">
          <Link className="nav-link">
              <i className="bi bi-arrow-down-square icon"></i>
            <span className="link">Archive</span>
          </Link>
        </li>
        <li className="list">
          <Link className="nav-link">
            <i className="bi bi-trash3 icon"></i>
            <span className="link">Bin</span>
          </Link>
        </li>
      { !loggedIn && ( <React.Fragment>
       <li className="list">
          <Link className="nav-link" to={"/Home"}>
            <span className="link"><button className="btn" onClick={()=>{setLoggedIn(true);
             Navigate("/Home");
             }}
             >LOGIN</button></span>
          </Link>
        </li>
        <li className="list">
          <Link className="nav-link">
            <span className="link"><button className="btn" >SIGN UP</button></span>
          </Link>
        </li>
       </React.Fragment>
)}
      </ul>
     
    </div>
    );
}
