import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Side from "./components/Side";
import Footer from "./components/pages/Footer";
import Page404 from "./components/PageNotFound";
import Blog from "./components/pages/blogs/Blog";
import Maintenance from "./components/pages/blogs/components/Maintenance";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />
            <Services />
            <Project />
            <Contact />
            <Side />
            <Footer />
          </Route>
          <Route path="/blog">
            <Maintenance />
            <Blog />
            <MessengerCustomerChat
              pageId="537141456644329"
              appId="177688504288200"
            />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
