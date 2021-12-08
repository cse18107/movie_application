import axios from "axios";

export default axios.create({
  baseURL: "http://omdbapi.com",
  withCredentials: false,
  headers: {
    'mode':'no-cors',
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
}
});
