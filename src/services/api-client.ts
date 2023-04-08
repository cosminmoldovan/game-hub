import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6fb9ab5497c14ffc9144555e2c7618d5",
  },
});
