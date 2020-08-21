import React from "react";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

const login = () => {
  return (
    <Layout title="Login">
      <LoginForm />
    </Layout>
  );
};

export default login;
