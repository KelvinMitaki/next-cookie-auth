import Axios from "axios";
import Router from "next/router";

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

export const getClientSideToken = () => {
  if (window) {
    const user = window[WINDOW_USER_VARIABLE] || {};
    return { user };
  }
  return { user: {} };
};

export const authInitialProps = isProtectedRoute => ({ req, res }) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  const currentPath = req ? req.url : window.location.pathname;
  const user = auth.user;
  const isAnonymous = !user || user.type !== "authenticated";
  if (isProtectedRoute && isAnonymous && currentPath !== "/login") {
    if (res) {
      res.redirect(302, "/login");
      res.finished = true;
      return {};
    }
    Router.push("/login");
    return {};
  }
  return { auth };
};

export const logoutUser = async () => {
  if (window) {
    window[WINDOW_USER_VARIABLE] = {};
  }
  await Axios.post("/api/logout");
  Router.push("/login");
};
