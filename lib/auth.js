import Axios from "axios";

export const loginUser = async ({ email, password }) => {
  const res = await Axios.post("/user/login", { email, password });
  console.log(res.data);
};
