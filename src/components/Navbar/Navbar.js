import React from "react";
import classes from "./Navbar.module.css";
import "../../index.css";
import { FaBars, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.NavCenter}>
        <div className={classes.NavHeader}>
          <button className={`${classes.Btn} ${classes.ToggleBtn} `}>
            <FaBars />
          </button>
        </div>
        <ul className={classes.NavLinks}>
          <li>
            <button className={classes.LinkBtn}>About</button>
          </li>
          <li>
            <button className={classes.LinkBtn}>Products</button>
          </li>
          <li>
            <button className={classes.LinkBtn}>Contact</button>
          </li>
        </ul>

        <button
          className={`${classes.Btn} ${classes.SigninBtn} ${classes.SigninBtnFlex}`}
        >
          <span>Sign in</span>
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
