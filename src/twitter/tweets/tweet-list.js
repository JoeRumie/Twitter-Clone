import React from 'react';
import TweetItem from './tweet-item';

const TweetList = ({tweetsArray, deleteTweet}) => {
    return(
        <ul className="list-group">
            {
                tweetsArray.map(tweet =>
                    <TweetItem 
                        key={tweet.id}
                        tweet={tweet}
                        deleteTweet={deleteTweet}
                    />
                )
            }
        </ul>
    );
};
export default TweetList;