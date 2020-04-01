import axios from "axios";

const KEY = "AIzaSyAhL6WZP9erPiLUDTxAsgyW5wltL2jXXL8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

// https://developers.google.com/youtube/v3/docs/search/list#parameters
