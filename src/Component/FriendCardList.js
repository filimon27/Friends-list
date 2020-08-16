import React from "react";
import "./FriendCardList.css";
export default function FriendCardList(props) {
    return (
        <div className="Container" style={styleFriendCardList}>
            <div>
                <img src={props.friend.photo} style={styleImage} alt="image here" />
            </div>
            <div style={styleP}>
                <p>
                    <b>Name:</b>
                    {props.friend.name}
                </p>
                <p>
                    <b>Occupation:</b>
                    {props.friend.occupation}
                </p>
                <p>
                    <b>Location:</b>
                    {props.friend.location}
                </p>
            </div>
        </div>
    );
}
const styleImage = {
    display: "flex",
    width: "280px",
    justifyContent: "center",
    backgroundColor: "#03A9F4",
    padding: "0px 60px",
};
const styleP = {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 70px",
};
const styleFriendCardList = {
    boxShadow: "0 2px 2px",
    margin: "0px 10px 0px 10px",
    width: "400px",
    justifyContent: "Space-around",
};


