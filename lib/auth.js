import Axios from "axios";

Axios.defaults.withCredentials = true;
const WINDOW_USER_VARIABLE = "__USER__";

export const loginUser = async ({ email, password }) => {
  try {
    const res = await Axios.post("/user/login", { email, password });
    if (res.data) {
      window[WINDOW_USER_VARIABLE] = res.data || {};
    }
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

export const getUserScript = user => {
  return `${WINDOW_USER_VARIABLE}=${JSON.stringify(user)}`;
};

export const getServerSideToken = req => {
  const { signedCookies = {} } = req;
  if (!signedCookies) {
    return {};
  }
  if (!signedCookies.token) {
    return {};
  }
  return { user: signedCookies.token };
};
