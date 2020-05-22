import React, { Component } from "react";
import Joi from "@hapi/joi";

class Forms extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { error } = this.schema.validate(this.state.data);

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
    this.doSubmit();
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

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
}

export default Forms;
