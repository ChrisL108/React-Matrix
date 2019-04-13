import React from "react";

export default function StepFirewall(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <h2 className="title">Firewall</h2>

      <div className="form-group">
        <label htmlFor="firewall-features">
          What specialized Firewall features do you require?
        </label>
        <select
          className="form-control"
          multiple={true}
          name="firewall-features"
          id="firewall-features"
        >
          <option value="fwIntrusionPrevention">Intrusion Prevention</option>
          <option value="fwIntrusionDetection">Intrusion Detection</option>
          <option value="fwWebApp">Web Application Firewall</option>
          <option value="fwAntiVirus">Anti-Virus</option>
          <option value="fwUrlFiltering">URL Filtering</option>
          <option value="fwAdLdapIntegration">AD/LDAP Integration</option>
          <option value="fwContentFiltering">Content Filtering</option>
          <option value="fwMalwareProtection">Malware Protection</option>
          <option value="fwSandboxing">Sandboxing</option>
          <option value="fwHighAvailability">High Availability</option>
          <option value="fwWebGateway">Secure Web Gateway</option>
          <option value="softwareDefined">SD-WAN</option>
          <option value="fwBotnetProtection">Botnet Protection</option>
          <option value="fwMobilityProtection">Mobility Protection</option>
          <option value="fwAppControl">App Control</option>
          <option value="fwVPN">VPN</option>
          <option value="fwSSLInspections">SSL Inspection</option>
          <option value="fwCloudManaged">Cloud Managed</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="firewall-features">
          How many concurrent users will the firewall be supporting?
        </label>
        <select name="concurrent-users" id="concurrent-users">
          <option value="lessThan50">&lt;50</option>
          <option value="50-100">50-100</option>
          <option value="100-200">100-200</option>
          <option value="200-1000">200-1,000</option>
          <option value="1000-10000">1,000-10,000</option>
          <option value="other">Other (please specify)</option>
          {/* <!-- TODO add other functionality --> */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="firewall-interfaces">
          Interfaces Required on Firewall:
        </label>

        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            FE RJ45
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            // selected={true}
            type="checkbox"
            name="firewall-interfaces"
            id="PoE"
            value="PoE"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            PoE
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            Gigabit SFP
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            10Gigabit SFP
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            40Gigabit QSFP+
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            40/100Gigabit QSPF+
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            Wi-Fi Antenna
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            USB for LTE SIM card slot
          </label>
          <input className="hidden port-count" type="number" name="count" />
        </div>
        <div className="form-check">
          <input
            className="port-check"
            type="checkbox"
            name="firewall-interfaces"
            id="feRj45"
            value="feRj45"
          />
          <label
            className="form-check-label form-check-label-lg"
            htmlFor="firewall-interfaces"
          >
            other
          </label>
          <input className="hidden port-count" type="text" name="other" />
        </div>
      </div>
    </React.Fragment>
  );
}
