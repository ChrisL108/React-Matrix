import React from "react";

export default function UserInfo(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="email">Email address: </label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
        />

        <label htmlFor="username">Username: </label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
}
