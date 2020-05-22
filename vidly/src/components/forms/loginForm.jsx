import React, { Component } from "react";
import Input from "../common/input";
import Joi from "@hapi/joi";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });

  validate = () => {
    const { error } = this.schema.validate(this.state.account);

    if (!error) return null;
    const errors = {};
    // console.log(error.details[0]);
    for (let item of error.details) {
      // console.log(item);
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;
    console.log("Submitted");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    // console.log(this.schema._usernames._byKey.entries());
    const schema = Joi.object().keys({
      // [name]: this.schema[name],
      username: Joi.string().required().label("Username"),
    });
    schema.validate(obj);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form action="">
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            type="text"
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            type="password"
            error={errors.password}
          />
          <button
            disabled={this.validate()}
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
