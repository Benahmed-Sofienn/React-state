import "./App.css";
import React from "react";
import Profile from "./Compnents/Profile";
import {Button} from 'react-bootstrap'

class App extends React.Component {
  state = {
    show: false,
  };
  handelClick = () => {
    this.setState({show: !this.state.show} )

  }
  render() {
    return (
      <div className="App">
        <Button variant="dark" onClick={this.handelClick}>show</Button>
        {this.state.show &&
        <Profile/>}
      </div>
    );
  }
}

export default App;
