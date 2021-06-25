import React from "react";
import Profilepic from "../assets/img/Profilepic.png";
import "./Profile.css";

class Profile extends React.Component {
  state = {
    fullName: "Sofein Ben Ahmed",
    bio: "Formation FullStack JavaScript",
    imgSrc: Profilepic,
    profession: "Web developer",
    time: 0,
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="Background">
        <img src={this.state.imgSrc} alt="Profile pic" />
        <h1>Name : {this.state.fullName}</h1>
        <h2>Profession : {this.state.profession}</h2>
        <h3>Bio : {this.state.bio}</h3>
        <br/>
        <h3>this Component has mounted since {this.state.time} s</h3>
        
      </div>
    );
  }
}

export default Profile;
