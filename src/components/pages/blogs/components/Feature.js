import classes from "./feature.module.css";
const Feature = ({ title, image, description, date, viewimg, modal }) => {
  const Viewimg = (image) => {
    viewimg(image);
    modal(true);
  };
  // alert("under construction!");
  return (
    <div className={"row"}>
      <div className={""}>
        <h1 className={classes.featureTitle}>Feature Post Post</h1>
        <div>
          <div className={classes.imgContainer}>
            <img
              onClick={() => {
                Viewimg(image);
              }}
              className={classes.imgFeature}
              src={image}
              alt=""
              width="50%"
            />
          </div>
          <h2 className={classes.title}>{title}</h2>
        </div>
        <p className={classes.description}>
          <q>{description}</q>
        </p>
        <p className={classes.posted + " " + "m-0"}>
          Posted by: Lex Adrian Lingad
        </p>
        <p className={classes.posted + " " + "m-0 text-muted"}>
          Posted: {date}
        </p>
      </div>
      <textarea
        className="mt-3"
        name=""
        id=""
        rows="5"
        placeholder="Comment"
      ></textarea>
      <button className="btn btn-danger mt-2">Post Comment</button>
    </div>
  );
};
export default Feature;
