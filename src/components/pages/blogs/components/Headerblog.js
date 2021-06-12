import classes from "./headerblog.module.css";
import { Link } from "react-router-dom";
const Headerblog = () => {
  return (
    <header className={classes.headerblog}>
      <div className="row">
        <div className="col-lg-6">
          <div className={classes.brandlogo}>
            <img
              className={classes.logo}
              src="'../../asset/logo.png"
              alt="logo"
            />
          </div>
          <div className={classes.brand}>
            <h2 className={classes.brandName}>
              L.A.L. <br />
            </h2>
            <div className={classes.spanPorf}>
              <span className={classes.porf}>My Personal Blog</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-end">
          <Link to="/">
            <button className={classes.back}>Back to my Porfolio</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Headerblog;
