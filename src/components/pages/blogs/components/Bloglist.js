import classes from "./bloglist.module.css";
import { useState } from "react";
const Bloglist = ({ res, index, title, desciption, id, select, image }) => {
  const [view, setView] = useState(false);
  const Show = () => {
    setView(true);
  };
  const Hide = () => {
    setView(false);
  };
  const View = () => {
    alert(1);
  };
  const Selected = (id) => {
    const display = id - 1;
    select(display);
  };
  return (
    <section className={classes.content}>
      <div>
        <div className={classes.padd}>
          <div key={index}>
            <div
              className={classes.blogCard}
              onMouseEnter={() => Show()}
              onMouseLeave={() => Hide()}
            >
              <div className={classes.imgContainer}>
                <img
                  className={
                    view
                      ? classes.blogimgCon + " " + classes.imgZoom
                      : classes.blogimgCon
                  }
                  src={image}
                  alt=""
                />
              </div>
              <div
                className={
                  view
                    ? classes.blogLink + " " + classes.hoverLink
                    : classes.blogLink
                }
              >
                <h5 className={classes.blogListTitlle}>{title}</h5>
                {view ? (
                  <p className={classes.text}>
                    {`${desciption.substring(0, 100)}......`}
                    <br />
                    <div className="mt-4">
                      <a
                        onClick={() => Selected(id)}
                        className={classes.view}
                        href="#"
                      >
                        Read more
                      </a>
                    </div>
                  </p>
                ) : (
                  false
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bloglist;
