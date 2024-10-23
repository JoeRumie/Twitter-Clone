import React from "react";

const WhoToFollowListItem = (
    {
    who = {userName: 'Nasa', handle: 'Nasa', avatarIcon: 'nasa.png'}
    }
) => {
    const avatarSrc = require(`../../${who.avatarIcon}`);

    return (
        <li className="list-group-item">
            <div className="row ">
                <div className="col">
                    <img className="rounded-circle" height={48} src={avatarSrc} alt=""/>
                </div>
                <div className="col">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;