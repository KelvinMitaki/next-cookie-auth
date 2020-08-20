import React, { Component } from "react";
import { getUserProfile } from "../lib/auth";

export class profile extends Component {
  static async getInitialProps() {
    const res = await getUserProfile();
    return { user: res };
  }
  render() {
    console.log(this.props.user);
    return <div></div>;
  }
}

export default profile;
