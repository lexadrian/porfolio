import { useState } from "react";
import classes from "./side.module.css";
const Side = () => {
  const [isShow, setShow] = useState(false);
  const Showsocial = () => {
    const scrT = window.scrollY;
    if (scrT >= 180) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", Showsocial);
  return (
    <div className={isShow ? classes.fixedSocial : classes.hideSocial}>
      <a className={classes.icon} href="https://www.facebook.com/nairdaxel">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a
        className={classes.icon}
        href="https://twitter.com/sirLexii?fbclid=IwAR12jt3jfcNR0kj3GSTUZcTpkpGOqixgbDHmMIf7zYu30LScGjNkn0iBa9A"
      >
        <i class="fab fa-twitter-square"></i>
      </a>
      <a
        className={classes.icon}
        href="https://www.instagram.com/nairdaxel/?fbclid=IwAR3X9u4UWTf6QEn9CkDmNSbQM4LLOC983T74eX8f_E3VhoB20-vgU5NMZHo"
      >
        <i class="fab fa-instagram-square"></i>
      </a>
      <a
        className={classes.icon}
        href="https://www.linkedin.com/in/llingad?fbclid=IwAR2PPH1Wf69UjhBvy8AnSARvBcKMpnnhH39iyjC-lhVVc5WtTL9OChW82fs"
      >
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Side;
