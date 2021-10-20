import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router, Redirect,
  Route, Switch
} from "react-router-dom";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Partners from "./screens/partners/partners";
import Contact from "./screens/contact/contact";
import 'antd/dist/antd.css';
import Blog from "./screens/blog/blog";
import Privacy from "./screens/privacy/privacy";
import ReactGA from 'react-ga';
import AppContainer from "./AppContainer";
import CookieConsent from "react-cookie-consent";
import Cookies from "./screens/cookies/cookies";
import TermsPage from "./screens/terms/TermsPage";

const trackingId = "UA-164273150-1";
ReactGA.initialize(trackingId);

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  return (
      <div>
        <CookieConsent>By using this site you agree to our cookie policy found <a href='/cookies'>here</a></CookieConsent>
        <Router basename={process.env.PUBLIC_URL}>
          <AppContainer>
            <Switch>
              <Route path='/about'>
                <About width={width}/>
              </Route>
              {/*<Route path="/seeders"*/}
              {/*       render={() => window.location = "https://www.seedrs.com/challengeaccepted/coming-soon"} />            */}
              <Route path="/seeders">
                <Redirect to={"https://www.seedrs.com/challengeaccepted/coming-soon"} />
              </Route>
              <Route path='/partner'>
                <Partners width={width}/>
              </Route>
              <Route path='/contact'>
                <Contact width={width}/>
              </Route>
              <Route path='/blog'>
                <Blog width={width}/>
              </Route>
              <Route path='/privacy'>
                <Privacy width={width}/>
              </Route>
              <Route path='/cookies'>
                <Cookies width={width}/>
              </Route>
              <Route path='/terms'>
                <TermsPage width={width}/>
              </Route>
              <Route path='/'>
                <Home width={width}/>
              </Route>
            </Switch>
          </AppContainer>
        </Router>
      </div>
  );
}

export default App;
