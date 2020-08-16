import React from "react";
import FriendCardList from "./FriendCardList";
export default function FriendCard(props) {
    return (
        <div style={styleFriendCard}>
            {props.friend.map((friend) => (
                <FriendCardList friend={friend} />
            ))}
        </div>
    );
}
const styleFriendCard = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
};