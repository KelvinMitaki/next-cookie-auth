import React, { Component } from "react";
import { loginUser } from "../lib/auth";
import Router from "next/router";
export class LoginForm extends Component {
  state = {
    email: "Julianne.OConner@kory.org",
    password: "kale.biz",
    error: null,
    loading: false
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ error: null, loading: true });
    const res = await loginUser(this.state);
    this.setState({ loading: false });
    if (!res.error) {
      return Router.push("/profile");
    }
    this.setState({ error: res.error.response.data });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>{" "}
        <div>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <button disabled={this.state.loading} type="submit">
          {this.state.loading ? "Sending..." : "Submit"}
        </button>
        {this.state.error && <div>{this.state.error}</div>}
      </form>
    );
  }
}

export default LoginForm;
