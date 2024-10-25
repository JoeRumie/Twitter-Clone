import { createSlice } from "@reduxjs/toolkit";
import tweets from './twitter.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
   };
   
   const templatetweet = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tweetsSlice = createSlice({
 name: 'tweets',
 initialState: { tweets: tweets },
 reducers: {
    createTuit(state, action) {
      state.tweets.unshift({
        ...action.payload,
        ...templatetweet,
        _id: (new Date()).getTime(),
      })
    }
  }
 
});
export const {createTuit} = tweetsSlice.actions;

export default tweetsSlice.reducer;

