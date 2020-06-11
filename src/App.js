import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Partners from "./screens/partners/partners";
import Contact from "./screens/contact/contact";
import 'antd/dist/antd.css';
import Blog from "./screens/blog/blog";
import Privacy from "./screens/privacy/privacy";
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
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path='/about'>
                <About width={width}/>
              </Route>
              <Route path='/partner'>
                <Partners width={width} />
              </Route>
              <Route path='/contact'>
                <Contact width={width} />
              </Route>
              <Route path='/blog'>
                <Blog width={width} />
              </Route>
              <Route path='/privacy'>
                <Privacy width={width} />
              </Route>
              <Route path='/'>
                <Home width={width} />
              </Route>
            </Switch>
          </Router>
        </div>
  );
}

export default App;
