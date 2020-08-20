import Axios from "axios";

Axios.defaults.withCredentials = true;

export const loginUser = async ({ email, password }) => {
  try {
    const res = await Axios.post("/user/login", { email, password });
    console.log(res.data);
  } catch (error) {
    console.log(error.response);
  }
};

export const getUserProfile = async () => {
  try {
    const res = await Axios.get("/api/profile");
    return res.data;
  } catch (error) {
    return error;
  }
};
