import React from 'react';

const TwitterSummaryItem = (
    { 
        tweet = {
            "topic": 'Space',
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla CyberTruck lands on Mars and picks up the curiosity rover on its bed",
            "image": "TESLA-LOGO.jpg"
        }
    }
    ) => {
        console.log(tweet.image);
        const tweetImg = require(`../../${tweet.image}`);

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                <div>{tweet.userName} . {tweet.time}</div>
                <div className="fw-bolder">{tweet.topic}</div>
                <div>{tweet.title}</div>
                </div>
                <div className="col-2">
                <img width={65} className="rounded-circle" src={tweetImg}/>
                </div>
            </div>
        </li>

    )
};
export default TwitterSummaryItem;