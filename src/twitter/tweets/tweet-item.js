import React from 'react';
import { FaRecycle, FaRegDotCircle, FaRegTrashAlt, FontAwesomeIcon } from "react-icons/fa"

const TweetItem = ({tweet, deleteTweet}) => {
    const image = require(`../../${tweet.image}`);

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" src={image} width={70}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="fw-bolder fs-5"> 
                            {tweet.username} 
                            <span className="fw-normal fs-6">
                                @{tweet.username}   {tweet.time}  
                                <FaRegTrashAlt
                                    className="float-end"
                                    onClick={() => deleteTweet(tweet.id)}
                                />
                            </span>
                        </div>
                    </div>
                    <div>{tweet.content}</div>
                </div>

            </div>

        </li>
    );
};
export default TweetItem;