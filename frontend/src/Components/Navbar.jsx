import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { login, logout } from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import {
  HamburgerIcon,
  ExternalLinkIcon,
  EditIcon,
  RepeatIcon,
  AddIcon,
} from "@chakra-ui/icons";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
const Navbar = () => {
  const { user } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
        Blog.com
        </Link>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            {user ? (
              <Link
                to="/"
                className="navbar-link"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Link>
            ) : (
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            )}
          </li>
          <li className="navbar-item">
            <Link to="/newblog" className="navbar-link">
              Add-Blogs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blogs" className="navbar-link">
              All Blogs
            </Link>
          </li>
          {user ? (
            <li className="navbar-item">
              <Link className="navbar-link">{user.split(" ")[0]}</Link>
            </li>
          ) : null}
        </ul>
        <ul className="navbar-in-mobile-mode">
        <Menu >
          <MenuButton 
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
           
          />
          <MenuList  >
            <MenuItem  _hover={{ bg: 'gray.400' }}>
              <li className="navbar-item"  >
                <Link to="/" className="navbar-link" >
                  Home
                </Link>
              </li>
            </MenuItem >
            <MenuItem   _hover={{ bg: 'gray.400' }} >
              <li className="navbar-item">
                {user ? (
                  <Link
                    to="/"
                    className="navbar-link"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link to="/login" className="navbar-link">
                    Login
                  </Link>
                )}
              </li>
            </MenuItem>
            <MenuItem  _hover={{ bg: 'gray.400' }}>
              <li className="navbar-item">
                <Link to="/newblog" className="navbar-link">
                  Add-Blogs
                </Link>
              </li>
            </MenuItem>
            <MenuItem  _hover={{ bg: 'gray.400' }}>
              <li className="navbar-item">
                <Link to="/blogs" className="navbar-link">
                  All Blogs
                </Link>
              </li>
            </MenuItem > 
            <MenuItem _hover={{ bg: 'gray.400' }}>
              {user ? (
                <li className="navbar-item">
                  <Link className="navbar-link">{user.split(" ")[0]}</Link>
                </li>
              ) : null}
            </MenuItem>
            
          </MenuList>
        </Menu>
        
        </ul>
       

      </div>
     
        
      
    </nav>
  );
};

export default Navbar;
