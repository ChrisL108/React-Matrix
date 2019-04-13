import React from "react";
import StepGeneral from "./steps/1-General";
import StepFirewall from "./steps/2-Firewall";
import StepEmail from "./steps/3-Email";
import UserInfo from "./steps/4-InfoGather";
import ProviderProps from "../../data/ProviderProps";
import "./MasterForm.css";
import "rc-progress/assets/index.css";

import { Line } from "rc-progress";

// import Select from 'react-select';

export default class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...ProviderProps,
      colors: "",
      currentStep: 1,
      maxSteps: 4,
      email: "",
      firstName: "",
      lastName: ""
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.previousButton = this.previousButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextOrSubmitButton = this.nextOrSubmitButton.bind(this);
  }

  handleChange = event => {
    const { name, value, type, checked, options } = event.target;
    if (options) {
    }
    // const newState = type === 'checkbox'     ? checked     : value
    const newState =
      type === "checkbox"
        ? checked
        : type === "select"
        ? [...event.target.options].filter(o => o.selected).map(o => o.value)
        : value;

    this.setState({ [name]: newState });
  };

  handleSubmit = event => {
    event.preventDefault();
    // const { email, username, password } = this.state;
    // alert(`Your registration detail: \n
    //        Email: ${email} \n
    //        Username: ${username} \n
    //        Password: ${password}`);
    alert(JSON.stringify(this.state));
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: currentStep });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    let max = this.state.maxSteps;
    currentStep = currentStep >= max ? max : currentStep + 1;
    this.setState({ currentStep: currentStep });
  };

  previousButton() {
    const currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary sticky-left col-md-1 col-xs-1 sm-px-5"
          type="button"
          onClick={this._prev}
        >
          {/* Previous */}

          <span>&#60;</span>
        </button>
      );
    }
    return null;
  }

  nextOrSubmitButton() {
    const currentStep = this.state.currentStep;
    const max = this.state.maxSteps;
    const isNotLastStep = currentStep < max;

    const style = `btn sticky-right col-md-1 col-xs-1 sm-px-5`,
      buttonClass = isNotLastStep
        ? `${style} btn-secondary`
        : `${style} btn-primary`,
      buttonHandler = isNotLastStep ? this._next : this.handleSubmit;

    return (
      <button className={buttonClass} type="button" onClick={buttonHandler}>
        {isNotLastStep ? <span>&#62;</span> : <span>&#187;</span>}
      </button>
    );
  }

  getProgressBar() {
    const percent = (this.state.currentStep / this.state.maxSteps) * 100;
    return (
      <div
        className="text-center text-secondary"
        style={{
          margin: 5,
          width: `100%`
        }}
      >
        <small>{percent}%</small>
        <Line
          strokeColor="#61dafb"
          strokeWidth=".5"
          percent={percent}
          trailWidth="1"
        />
      </div>
    );
  }

  // handleMultiSelectChange = selectedOptions => {
  //     console.log(selectedOptions);
  //     this.setState({ techFilter: selectedOptions });
  // };

  handleMultiSelectChange = e => {
    console.log(`Target Options: ${e.target.name}`);
    console.log(
      [...e.target.options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value)
    );
    this.setState({
      [e.target.name]: [...e.target.options]
        .filter(({ selected }) => selected)
        .map(({ value }) => value)
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="top-section col-md-12">
          <h3 className="security-matrix-title">Security Matrix</h3>
        </div>
        {this.getProgressBar()}

        <form
          className="col-md-8 col-xs-10 px-5 middle-section"
          onSubmit={this.handleSubmit}
        >
          <StepGeneral
            handleChange={this.handleChange}
            handleMultiSelectChange={this.handleMultiSelectChange}
            currentStep={this.state.currentStep}
            recentAttack={this.state.recentAttack}
            endpoints={this.state.endpoints}
            colors={this.state.colors}
            currentIssue={this.state.currentIssue}
          />
          <StepFirewall
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <StepEmail
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <UserInfo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            username={this.state.username}
          />
          <br /> {this.previousButton()}
          <br /> {this.nextOrSubmitButton()}
        </form>
      </React.Fragment>
    );
  }
}
