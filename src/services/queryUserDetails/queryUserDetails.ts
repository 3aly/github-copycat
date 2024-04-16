import axios from "axios";
import { apis } from "../envConstants";

const queryUserDetails = (username?: string) => {
  return axios.get(`${apis.base}/${username}`).then((res) => res.data);
};
export default queryUserDetails;
