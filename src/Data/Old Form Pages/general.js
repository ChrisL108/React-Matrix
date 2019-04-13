import React from "react";
// import Select from 'react-select';
// import styles from 'react-select/dist/react-select.css';

export default function StepGeneral(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <React.Fragment>
      <h2 className="title">General</h2>
      <div className="form-group">
        <label className="form-check-label">
          Has the Customer recently experienced an attack or breach of security?
          <div className="form-check-inline">
            <label>
              <input
                type="radio"
                className="radio"
                value="yes"
                checked={props.recentAttack === "yes"}
                onChange={props.handleChange}
                name="recentAttack"
              />
              Yes
            </label>
          </div>
          <div className="form-check-inline">
            <label>
              <input
                type="radio"
                className="radio"
                value="no"
                checked={props.recentAttack === "no"}
                onChange={props.handleChange}
                name="recentAttack"
              />
              No
            </label>
          </div>
          <div className="form-check-inline">
            <label>
              <input
                type="radio"
                className="radio"
                value="na"
                checked={props.recentAttack === "na"}
                onChange={props.handleChange}
                name="recentAttack"
              />
              Unsure
            </label>
          </div>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="">
          What is the issue with the current solution?
          <select
            name="currentIssue"
            className="form-control"
            value={props.currentIssue}
            onChange={props.handleChange}
          >
            <option value="security">Security Breach</option>
            <option value="hardware">Needing Hardware refresh</option>
            <option value="costs">High Cost</option>
            <option value="support">Lack of support</option>
            <option value="threats">Emerging Threats</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div className="form-group">
        <label>What type of security solution are you looking for?</label>
        <div className="form-check">
          <input
            className=""
            value="managedFirewall"
            type="checkbox"
            name="solutionTypes"
            onChange={props.handleChange}
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            Managed Next-Generation Firewall
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            value="professionalServices"
            type="checkbox"
            name="solutionTypes"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="firewall-interfaces">
            Professional Services
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            value="remoteAccess"
            type="checkbox"
            name="solutionTypes"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="firewall-interfaces">
            Remote Access
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            value="endpointSecurity"
            type="checkbox"
            name="solutionTypes"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="firewall-interfaces">
            Endpoint Security
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            value="emailSecurity"
            type="checkbox"
            name="solutionTypes"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="firewall-interfaces">
            Email Security
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            value="softwareDefined"
            type="checkbox"
            name="softwareDefined"
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="softwareDefined">
            Software Defined
          </label>
        </div>
      </div>
      {/* <!-- if PROFESSIONAL SERVICES is selected --> */}
      <div className="hidden form-group field-solution-professional-services">
        <label htmlFor="professional-services">
          Please select ALL Professional services the customer is interested in.
        </label>
        <select
          className=" form-control"
          multiple={true}
          name="solutionTypes-professional-services"
        >
          <option value="ddos">DDoS Mitigation</option>
          {/* <!-- <option value="compliancy">Compliancy (Assessments/Audits)</option> --> */}
          <option value="dnsProtection">DNS Protection</option>
          <option value="penetrationTesting">Penetration Testing</option>
          <option value="vulnerabilityScanning">Vulnerability Scanning</option>
          <option value="soc">SOC (Service-oriented communications)</option>
          <option value="securityTraining">Security Training</option>
          <option value="darkWebMonitoring">Dark Web Monitoring</option>
          <option value="siem">Security Monitoring SIEM or Log Mgmt</option>
          <option value="threatBreachRespone">
            Threat Breach/Response Mitigation
          </option>
          <option value="other">Other</option>
        </select>
        {/* <div className="hidden" id="other-professional-service">
                    <label htmlFor="professional-services-other">Please specify the other Professional Service</label>
                    <input type="text" placeholder="advanced implementation, etc." id="professional-services-other" name="professional-services-other" />
                </div> */}
      </div>
      <div className="form-group">
        {/* <!-- COMPLIANCY --> */}
        <label className="mr-3" htmlFor="general-compliancy">
          What compliancy do you require?
        </label>
        <select
          className="select2 form-control"
          id="compliancy"
          multiple={true}
          name="compliancy"
          onChange={props.handleMultiSelectChange}
        >
          <option value="compHipaa">HIPAA</option>
          <option value="compSox">SOX</option>
          <option value="compPciDss">PCI-DSS</option>
          <option value="compGbl">GBL</option>
          {/* <!-- <option value="compSoc">SOC</option> --> */}
          <option value="compFisma">FISMA</option>
          <option value="compEuGdpr">EU GDPR</option>
          <option value="compSsae18">SSAE 18</option>
          <option value="compItar">ITAR</option>
          <option value="compFedRamp">FedRAMP</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="avoid-vendors">
          Are there any vendors or manufacturers to avoid?
        </label>
        <select name="avoid-vendors" id="avoid-vendors">
          <option value="noAvoidVendors">No</option>
          <option value="yesAvoidVendors">Yes</option>
        </select>
        {/* <select className="hidden" multiple={true} name="avoid-vendors-list" id="avoid-vendors-list">
                    <option>Will be dynamically generated</option>
                </select> */}
      </div>
      {/* <!--? DEPLOYMENT MODEL --> */}
      <label htmlFor="deployment-model">
        What type of deployment model are you looking for?
      </label>
      <select
        className="form-control"
        multiple={true}
        name="deployment-model"
        id="deployment-model"
      >
        <option value="fwPremiseBased">Premise-based</option>
        <option value="fwCloudBased">Cloud-based</option>
        <option value="fwVirtualImage">Virtual Image</option>
        <option value="fwUCPE">uCPE</option>
      </select>
      {/* <!--? ENDPOINTS --> */}
      <div className="form-group">
        <label htmlFor="endpoints">
          Please specify the total number of endpoints:
        </label>
        <input
          className="number-endpoints"
          type="number"
          value={props.endpoints}
          name="endpoints"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="avoid">Are there any manufacturers to avoid?</label>
        <input
          className="number-endpoints"
          type="text"
          name="avoid"
          id="avoid"
        />
      </div>
    </React.Fragment>
  );
}
