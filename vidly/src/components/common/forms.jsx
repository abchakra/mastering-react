import React, { Component } from "react";
import Input from "./input";
import Select from "./select";
class Forms extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    // console.log(this.state.data);
    const { error } = this.schema.validate(this.state.data);

    if (!error) return null;
    const errors = {};
    // console.log(error.details[0]);
    for (let item of error.details) {
      // console.log(item);
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
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
    // const obj = { [name]: value };
    // console.log(obj, this.schema);
    // const { error } = this.schema.validate(obj);
    // // const schema = { [name]: this.schema[name] };
    // // const { error } = Joi.validate(obj, schema);
    // return error ? error.details[0].message : null;
    return null;
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

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
      />
    );
  };
  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Forms;
