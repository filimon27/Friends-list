import React, { Component } from "react";
import Header from "./Component/Header";
import FriendCard from "./Component/FriendCard";
export default class App extends Component {
  state = {
    list: [
      {
        photo: require("./Component/photo-one.jfif"),
        name: "SpongeBob",
        occupation: "Fry cook",
        location: "A pinapple under the sea",
      },
      {
        photo: require("./Component/photo-three.jfif"),
        name: "Mr. Krabes",
        occupation: "Restaurant Owner",
        location: "A Giant Anchor ",
      },
      {
        photo: require("./Component/photo-two.jfif"),
        name: "Squadward",
        occupation: "Casher",
        location: "An Easter Island Head",
      },
    ],
  };
  render() {
    return (
        <div>
          <Header />
          <FriendCard friend={this.state.list} />
        </div>
    );
  }
}



