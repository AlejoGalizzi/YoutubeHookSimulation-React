import axios from "axios";

const KEY = "AIzaSyB5SakGS1DEDFl9Ns-CqwsRBq2SgK7TuNY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
