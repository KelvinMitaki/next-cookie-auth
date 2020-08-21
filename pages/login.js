import React from "react";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";
import { authInitialProps } from "../lib/auth";

const login = props => {
  return (
    <Layout title="Login" {...props}>
      <LoginForm />
    </Layout>
  );
};

export default login;

login.getInitialProps = authInitialProps();
