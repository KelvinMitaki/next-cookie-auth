import Axios from "axios";

Axios.defaults.withCredentials = true;

export const loginUser = async ({ email, password }) => {
  try {
    const res = await Axios.post("/user/login", { email, password });
    console.log(res.data);
    return { res };
  } catch (error) {
    console.log(error.response);
    return { error };
  }
};

export const getUserProfile = async () => {
  try {
    const res = await Axios.get("/api/profile");
    return { user: res.data };
  } catch (error) {
    return { error };
  }
};
