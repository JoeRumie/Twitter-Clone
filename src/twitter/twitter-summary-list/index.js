import React from 'react';
import TwitterSummaryItem from './twitter-summary-item';
import {useSelector} from "react-redux";

const TwitterSummaryList = () => {
    const { tweets } = useSelector(state => state.tweets)
    return (
        <ul className="list-group">
            {
                tweets.map(tweet =>
                <TwitterSummaryItem
                key={tweet._id}
                tweet={tweet}/>)
            }
        </ul>
    )
};
export default TwitterSummaryList;