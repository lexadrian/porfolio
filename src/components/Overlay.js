import classes from "./overlay.module.css";
import Menulist from "./Menulist";
const Overlay = () => {
  return (
    <div className={classes.overlay}>
      <div>
        <Menulist />
      </div>
      
    </div>
  );
};

export default Overlay;
