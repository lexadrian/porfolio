import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./project.module.css";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={classes.projectSection} id="projects">
      <div data-aos="fade-up">
        <h1 className={classes.title}>My Porfolio</h1>
        <div className={classes.paraSection}>
          <p className={classes.para}>
            Here are my sample project, some of my projects can't be posted on
            my portfolio due to my client privacy.
          </p>
        </div>
      </div>
      <div className={classes.myProjects}>
        <div className="row text-center">
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12"
            data-aos="fade"
            data-aos-delay="150"
          >
            <div className={classes.imgContainer}>
              <div className={classes.overlay}>
                <h1 className={classes.projectTitle}>Pet Care Website</h1>
                <p className={classes.projectPara}>Petshop Website</p>
                <button className={classes.linkWebsite}>
                  View Website <i class="fas fa-link"></i>
                </button>
              </div>
              <img className={classes.imgProject} src="./asset/p1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div
              className={classes.imgContainer}
              data-aos="fade"
              data-aos-delay="400"
            >
              <div className={classes.overlay}>
                <h1 className={classes.projectTitle}>Easy Apartment</h1>
                <p className={classes.projectPara}>
                  Apartment portal of Balanga City Bataan
                  <br />
                  Capstone Project
                </p>
                <button className={classes.linkWebsite}>
                  View Website <i class="fas fa-link"></i>
                </button>
              </div>
              <img className={classes.imgProject} src="./asset/p2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div
              className={classes.imgContainer}
              data-aos="fade"
              data-aos-delay="400"
            >
              <div className={classes.overlay}>
                <h1 className={classes.projectTitle}>RICS Website</h1>
                <p className={classes.projectPara}>
                  Training School Website
                  <br />
                  Rizal Institute of Computer Studies
                </p>
                <button className={classes.linkWebsite}>
                  View Website <i class="fas fa-link"></i>
                </button>
              </div>
              <img className={classes.imgProject} src="./asset/p4.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 col-sm-12 col-xs-12"
            data-aos="fade"
            data-aos-delay="800"
          >
            <div className={classes.imgContainer}>
              <div className={classes.overlay}>
                <h1 className={classes.projectTitle}>Business Solution</h1>
                <p className={classes.projectPara}>User Management Dashboard</p>
                <button className={classes.linkWebsite}>
                  View Website <i class="fas fa-link"></i>
                </button>
              </div>
              <img className={classes.imgProject} src="./asset/p3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
