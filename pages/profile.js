import React, { Component } from "react";
import { getUserProfile } from "../lib/auth";
import Error from "next/error";
export class profile extends Component {
  state = {
    user: null,
    error: null
  };
  async componentDidMount() {
    const res = await getUserProfile();
    if (res.user) {
      return this.setState({ user: res.user });
    }
    this.setState({ error: res.error });
  }

  render() {
    this.state.user
      ? console.log(this.state.user)
      : console.log(this.state.error);
    if (this.state.error) {
      return <Error statusCode={500} />;
    }
    return <pre>{JSON.stringify(this.state.user, null, 2)}</pre>;
  }
}

export default profile;
