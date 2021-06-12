import classes from "./header.module.css";
import { useState } from "react";
import Menulist from "../Menulist";
import Overlay from "../Overlay";
const Header = () => {
  const [isNavbar, setNavbar] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const changeHeader = () => {
    const scr = window.scrollY;
    if (scr >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const Navi = () => {
    if (!isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  window.addEventListener("scroll", changeHeader);
  return (
    <div
      className={
        isNavbar
          ? classes.headerSection + " " + classes.active
          : classes.headerSection
      }
    >
      <header className="row">
        <div className="col-md-6">
          <div className={classes.brandlogo}>
            <img className={classes.logo} src="asset/logo.png" alt="logo" />
          </div>
          <div className={classes.brand}>
            <h2 className={classes.brandName}>
              L.A.L. <br />
            </h2>
            <div className={classes.spanPorf}>
              <span className={classes.porf}>Portfolio</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.navi}>
            <Menulist />
          </div>
          <div className={classes.ham}>
            <button className={classes.hamlink} href="/" onClick={Navi}>
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
      {isMobile ? <Overlay></Overlay> : false}
    </div>
  );
};

export default Header;
