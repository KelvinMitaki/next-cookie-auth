import React, { Component } from "react";
import { loginUser } from "../lib/auth";
export class LoginForm extends Component {
  state = {
    email: "Julianne.OConner@kory.org",
    password: "kale.biz"
  };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    loginUser(this.state);
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
