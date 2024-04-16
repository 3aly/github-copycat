import axios from "axios";
import { apis } from "../envConstants";

const queryAllUsers = () => {
  return axios.get(`${apis.base}`).then((res) => res.data);
};
export default queryAllUsers;
