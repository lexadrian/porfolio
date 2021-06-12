import classes from "./menulist.module.css";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Menulist = (props) => {
  return (
    <div>
      <nav className={classes.isOn + " " + classes.isOff}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={200}
          className={classes.link}
          activeClass={classes.active}
          href="#home"
        >
          Home
        </Link>
        <Link
          activeClass={classes.active}
          to="services"
          spy={true}
          smooth={true}
          duration={200}
          className={classes.link}
          href="#services"
        >
          Services
        </Link>
        <Link
          activeClass={classes.active}
          to="projects"
          spy={true}
          smooth={true}
          duration={200}
          className={classes.link}
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className={classes.link}
          activeClass={classes.active}
          to="contact"
          spy={true}
          smooth={true}
          duration={200}
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Menulist;
