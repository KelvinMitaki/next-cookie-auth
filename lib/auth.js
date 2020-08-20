import Axios from "axios";

export const loginUser = async ({ email, password }) => {
  try {
    const res = await Axios.post("/user/login", { email, password });
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};
