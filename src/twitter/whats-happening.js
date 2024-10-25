import React, { useState, useEffect } from 'react';
import TweetList from './tweets/tweet-list';
import {AiOutlinePicture} from "react-icons/ai";
import { BsFileEarmarkBinary } from "react-icons/bs";
import {MdFormatListBulleted} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";


const WhatsHappening = () => {
    let [tweet, setTweet] = useState('')
    let [tweets, setTweets] = useState([]);

    useEffect(() => {
        const savedTweets = JSON.parse(localStorage.getItem('tweets')) || [];
        setTweets(savedTweets)
    }, []);

    const addTweet = () => {

        const newTweet = {
            id: tweets.length + 1,
            content: tweet,
            time: new Date().toLocaleString(),
            username: "Spacex",
            image: "space-x.jpg"
        }

        const updatedTweets = [...tweets, newTweet];
        setTweets(updatedTweets);
        localStorage.setItem('tweets', JSON.stringify(updatedTweets));
        console.log(updatedTweets);
        setTweet('');

    }

    const deleteTweet = (id) => {
        const updatedTweets = tweets.filter(tweet => tweet.id !== id);
        setTweets(updatedTweets);
        localStorage.setItem('tweets', JSON.stringify(updatedTweets));
        console.log(updatedTweets);
    }
    
    const image = require('../space-x.jpg');

    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <img className="rounded-circle" src={image} width={70}/>
                </div>
                <div className="col-10">
                    <textarea
                        className="form-control border-0"
                        value={tweet}
                        placeholder="What is happening?"
                        onChange={(event) => setTweet(event.target.value)}
                    >
                    </textarea>
                    <div>
                        <button className="rounded-pill btn btn-primary float-end" onClick={addTweet}>Tweet</button>
                        <div className="text-primary fs-4">
                            <AiOutlinePicture className="me-4"/>
                            <BsFileEarmarkBinary className="me-4"/>
                            <MdFormatListBulleted className="me-4"/>
                            <BsEmojiSmile className="me-4"/>
                            <HiOutlineLocationMarker className="me-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
            <TweetList tweetsArray={tweets} deleteTweet={deleteTweet}/>
        </div>
    );
};
export default WhatsHappening;