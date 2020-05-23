import React from "react";
import Joi from "@hapi/joi";
import Forms from "../common/forms";

class Registration extends Forms {
  state = {
    data: {
      username: "",
      password: "",
      fullname: "",
    },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    fullname: Joi.string().required().label("Name"),
  });

  doSubmit = () => {
    console.log("submit registration");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("fullname", "Name")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default Registration;
