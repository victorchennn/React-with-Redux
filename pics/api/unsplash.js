import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CiLBBBracSS1abtEBOl8GvHisBZ1VsPVZKv-DD_xQ1o"
  }
});
