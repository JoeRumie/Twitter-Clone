import React from 'react';
import twitterArray from '../twitter.json';
import TwitterSummaryItem from './twitter-summary-item';

const TwitterSummaryList = () => {
    return (
        <ul className="list-group">
            {
                twitterArray.map(tweet =>
                <TwitterSummaryItem
                key={tweet._id}
                tweet={tweet}/>)
            }
        </ul>
    )
};
export default TwitterSummaryList;