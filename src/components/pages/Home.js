import classes from "./home.module.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={classes.home} id="home">
      <div className={classes.overlay}>
        <h1 className={classes.hello} data-aos="fade-up">
          Hello,
        </h1>
        <h1 className={classes.name} data-aos="fade-up">
          I'm <span className={classes.red}>Lex Adrian</span>
        </h1>
        <h1 className={classes.developer} data-aos="fade-up">
          Front-End Web <span className={classes.white}>Developer.</span>
        </h1>
        <div className="row">
          <div className="col-md-12">
            <div className={classes.paddText}>
              <p className={classes.para} data-aos="fade-up">
                I'm a Freelance Front-End Web Developer, I love to help
                students, Businesses, Small organizations to make a Creative and
                Responsive website. As a Front-End Web Developer, I enjoyed
                designing and solving logical problems. If you want to know me
                more visit my Blog.
              </p>
            </div>
          </div>
        </div>
        <Link to="/blog">
          <button className={classes.button} data-aos="fade-up">
            VISIT MY BLOG <i class="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
