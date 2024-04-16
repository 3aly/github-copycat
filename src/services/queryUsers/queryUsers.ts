import axios from "axios";
import { apis } from "../envConstants";

const queryUsers = () => {
  return axios.get(`${apis.users}`).then((res) => res.data);
};
export default queryUsers;
