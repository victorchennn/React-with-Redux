import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// Basic Component Lifecycle
// constructor
// - render(Content visible on screen)
// - componentDidMount(Sit and wait for updates)
// - componentDidUpdate(Sit and wait until this component is not longer shown)
// - compoenntWillUnmount

// Using Hooks!
// const App = () => {
//   const [lat, setLat] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//
//   useEffect(() => {
//     window.navigator.geolocation.getCurrentPosition(
//       position => setLat(position.coords.latitude),
//       err => setErrorMessage(err.message)
//     );
//   }, []); // call once
//
//   let content;
//   if (errorMessage) {
//     content = <div>Error: {errorMessage}</div>;
//   } else if (lat) {
//     content = <SeasonDisplay lat={lat} />;
//   } else {
//     content <Spinner message="Please accept location request" />;
//   }
//
//   return <div className="border red">{content}</div>
// }
