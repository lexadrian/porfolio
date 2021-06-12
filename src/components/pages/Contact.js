import classes from "./contact.module.css";
import { useState, useRef } from "react";
import Thankyou from "../Thankyou";
const Contact = (props) => {
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const [isSend, setSend] = useState(true);
  const [isDisable, setDisable] = useState(false);
  const [sendloading, setloading] = useState("Send");
  const close = document.getElementsByTagName("BODY");

  const Send = async (e) => {
    e.preventDefault();
    let enteredName = name.current.value;
    let enteredEmail = email.current.value;
    let enteredMessage = message.current.value;

    if (enteredMessage === "" || enteredName === "" || enteredEmail === "") {
      alert("Please complete the form");
    } else {
      setloading("Sending....");
      setDisable(true);
      console.log("clicked");
      await fetch(
        "https://porfolio-345b7-default-rtdb.firebaseio.com/message.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => {
        setSend(false);
        setloading("Send");
        setDisable(false);
        return enteredName;
      });
    }
  };
  return (
    <section className={classes.contactMain} id="contact">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <h3 className={classes.contactMe}>Don't Be Shy </h3>
          <p className={classes.touchpara}>
            Feel Free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className={classes.socialMedias}>
            <p className={classes.touchpara}>
              <i class="far fa-envelope"></i> lexadrian6@gmail.com
            </p>
            <p className={classes.touchpara}>
              <i class="fab fa-facebook-square"></i> facebook.com/nairdael
            </p>
            <p className={classes.touchpara}>
              <i class="fab fa-twitter-square"></i> twitter.com/sirLexii
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <div className={classes.FormPadding}>
            <form onSubmit={Send}>
              <div className={isSend ? classes.isShow : classes.isHide}>
                <h1 className={classes.touch}>Get in Touch</h1>
                <input
                  className={classes.textbox}
                  type="text"
                  placeholder="Name"
                  ref={name}
                  required
                />
                <input
                  className={classes.textbox}
                  type="text"
                  placeholder="Your Email"
                  ref={email}
                  required
                />
                <textarea
                  className={classes.textbox}
                  name=""
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="Message"
                  ref={message}
                  required
                />
                <div>
                  <button
                    className={isDisable ? classes.sending : classes.send}
                    disabled={isDisable}
                  >
                    {sendloading}
                  </button>
                </div>
              </div>
            </form>

            {isSend ? true : <Thankyou name={name.current.value} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
