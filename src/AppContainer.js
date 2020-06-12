import {withRouter} from "react-router-dom";
import React from 'react';
import ReactGA from 'react-ga';
class App extends React.Component {

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return (
        <div>{this.props.children}</div>
    );
  }
}
export default withRouter(App);
