import React, { useContext } from "react";
import ProviderPropsContext from "../App";

export default function GeneralPage() {
  // const [providerProps, setProviderProps] = useContext(ProviderPropsContext);

  return (
    <>
      {/* <div className="form-group">
        <label htmlFor="">What is the issue with the current solution?</label>
        <select
          name="currentIssue"
          className="form-control"
          value={providerProps.currentIssue}
          onChange={e =>
            setProviderProps((providerProps.currentIssue = e.target.value))
          }
        >
          <option value="security">Security Breach</option>
          <option value="hardware">Needing Hardware refresh</option>
          <option value="costs">High Cost</option>
          <option value="support">Lack of support</option>
          <option value="threats">Emerging Threats</option>
          <option value="other">Other</option>
        </select>
      </div> */}
      <p>test</p>
    </>
  );
}
