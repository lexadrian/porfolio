import classes from "./thankyou.module.css";

const Thankyou = (props) => {
  return (
    <div>
      <div>
        <h1 className={classes.thankyou}>Thank you!</h1>
        <p className={classes.message}>
          Hi <span className={classes.name}>{props.name}</span>, I hope you're
          doing good today, Thank you for messaging me, I will review your
          message and I'll reply to you as soon as possible.
          <br />
          <br />
          <span className={classes.position}>
            You can follow me on my Social Media Accounts to get more updates.
          </span>
          <br />
          <br />
          Regards,
          <br />
          <span className={classes.name}> Lex Adrian Lingad</span>
          <br />
          <span className={classes.position}>Front-end Web Developer</span>
        </p>
      </div>
    </div>
  );
};
export default Thankyou;
