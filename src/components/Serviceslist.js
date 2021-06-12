import classes from "./serviceslist.module.css";

const Servicelist = (props) => {
  return (
    <div className="row">
      <div className={props.col} data-aos="fade-right">
        <div className={classes.servPadding}>
          <img className={classes.serviceImg} src="./asset/a1.png" alt="a1" />
        </div>
      </div>
      <div className={props.col} data-aos="fade-left">
        <div className={classes.servPadding}>
          <h1 className={classes.servicesTitle}>{props.title}</h1>
          <div className={classes.para}>
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicelist;
