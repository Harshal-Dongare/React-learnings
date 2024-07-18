import React from "react";
import DefaultAvatar from "../../assets/default-avatar.svg"
export function Person({ name, nickName = "ShakeAndBake", images }) {
    const img = images?.[0]?.small?.url || DefaultAvatar;

    return (
        <div>
            <img src={img} alt={name} style={{ width: "50px" }} />
            <h4>{name}</h4>
            <p>NickName : {nickName}</p>
        </div>
    );
}
