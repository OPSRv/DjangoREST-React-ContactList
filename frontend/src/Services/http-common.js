import axios from "axios";
import store from "../store";
// const token = store.getState().ContactListReducer.authorization.token;
const token = localStorage.getItem("token");
// const token =
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NjU3MTg1LCJqdGkiOiI4YWYwODI5NjU2MTA0YmI1YWRmOWNkYzUzZGMwZWZmYiIsInVzZXJfaWQiOjEsInVzZXJuYW1lIjoib3BzIn0.OgCE5hzipfN3Plt55bT3rm9d-hYJ20ZwBSPwOC33uzM";

export default axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    Accept: "application/json",
    Authorization: token,
  },
});
