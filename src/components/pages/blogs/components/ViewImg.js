import classes from "./viewimg.module.css";
const Viewimg = ({ img, setModal, title }) => {
  console.log("View" + img);
  const Close = () => {
    setModal(false);
  };
  const Escfunction = () => {
    setModal(false);
  };
  document.addEventListener("keydown", Escfunction, false);
  return (
    <div>
      <div onClick={Close} className={classes.imgOverlay}></div>
      <div onClick={Close} className={classes.imgContent}>
        <img class={classes.modalImg} src={img} alt="img" />
        <h1 className={classes.title}>{title}</h1>
      </div>
    </div>
  );
};
export default Viewimg;
