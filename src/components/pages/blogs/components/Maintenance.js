import classes from "./maintenance.module.css";
import { useState } from "react";
const Maintenance = () => {
  const [hide, setHide] = useState(true);
  const Go = () => {
    setHide(false);
  };
  const Back = () => {
    window.location.href = "/";
  };
  return (
    <section className={hide ? classes.maintenanceSection : classes.hide}>
      <div>
        <h1 className={classes.gear}>
          <i class="fas fa-tools"></i>
        </h1>
        <h1>under construction!</h1>
        <div className="text-center">
          <button onClick={Back} className={classes.back}>
            Back to Home
          </button>
        </div>
        {/* <button onClick={Go} className={classes.proceed}>
          Proceed to Blog Section
        </button> */}
      </div>
    </section>
  );
};
export default Maintenance;
