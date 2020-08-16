import React from "react";
export default function Header() {
    return (
        <div style={styleHead}>
            <h1>
                <u>Friends List</u>
            </h1>
        </div>
    );
}
const styleHead = {
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
    backgroundColor: "#FFFFFF",
    color: "blue",
};