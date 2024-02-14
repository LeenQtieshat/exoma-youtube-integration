import axios from "axios";
const KEY = "AIzaSyCcXvF4YqTCDgbZdimGbx2I2-fmf3_eEAU"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
