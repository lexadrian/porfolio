import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./services.module.css";

const service = [
  {
    id: 1,
    title: "Creative Website",
    para: "I create a website focusing on the brand and needs of the client, like typography, color combination, animation and etc. ",
  },
  {
    id: 2,
    title: "Mobile Friendly Website",
    para: "I developed a mobile-friendly website, Your website can be accessed on any devices like mobile phone, tablet, and laptop,  ",
  },
  {
    id: 3,
    title: "Business Solution Web Based",
    para: "I can help you to create a web application for your business, we can convert your manual daily task to an automated Web application such as an Inventory system, Point of Sales, Employee management and etc.",
  },
];
const Services = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={classes.services} id="services">
      <div data-aos="fade-up">
        <h1 className={classes.service}>SERVICES OFFERED</h1>
      </div>
      {/* service 1 */}
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12" data-aos="fade-right">
          <div className={classes.servPadding}>
            <img className={classes.serviceImg} src="./asset/a1.png" alt="a1" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12" data-aos="fade-left">
          <div className={classes.servPadding}>
            <h1 className={classes.servicesTitle}>{service[0].title}</h1>
            <div className={classes.para}>
              <p>{service[0].para}</p>
            </div>
            <button className={classes.button}>
              Learn more <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Service 2 */}
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12" data-aos="fade-right">
          <div className={classes.servPadding}>
            <img className={classes.serviceImg} src="./asset/a2.png" alt="a1" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12" data-aos="fade-left">
          <div className={classes.servPadding}>
            <h1 className={classes.servicesTitle}>{service[1].title}</h1>
            <div className={classes.para}>
              <p>{service[1].para}</p>
            </div>
            <button className={classes.button}>
              Learn more <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* service 3 */}
      <div className="row ">
        <div
          className="col-lg-6 col-md-12 col-xs-12 col-sm-12"
          data-aos="fade-right"
        >
          <div className={classes.servPadding}>
            <img className={classes.serviceImg} src="./asset/a3.png" alt="a1" />
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 col-xs-12 col-sm-12"
          data-aos="fade-left"
        >
          <div className={classes.servPadding}>
            <h1 className={classes.servicesTitle}>{service[2].title}</h1>
            <div className={classes.para}>
              <p>{service[2].para}</p>
            </div>
            <button className={classes.button}>
              Learn more <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
