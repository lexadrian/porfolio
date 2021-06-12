import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="./asset/logo.png" className={classes.brand} alt="brand" />
        <h4 className={classes.name}>Lex Adrian Lingad Porfolio</h4>
      </div>
    </footer>
  );
};

export default Footer;
