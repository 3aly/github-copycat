import axios from "axios";
import { apis } from "../envConstants";

const queryFollowers = (username: string) => {
  return axios
    .get(`${apis.base}/${username}/followers`)
    .then((res) => res.data);
};
export default queryFollowers;
