import React from "react";

export default function StepEmail(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <h2 className="title">Email</h2>

      <div className="section form-group ml-md-2 ml-sm-0" id="email-questions">
        <label htmlFor="email-security-features">
          What email security features are you looking for?
        </label>

        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox1"
            value="inboundOutboundFilter"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox1">
            Inbound/Outbound filtering
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="zeroThreatDetection"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            Zero-Hour Threat Detection
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="businessContinuity"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            Business Continuity
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="urlDefense"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            URL Defense
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="attachmentDefense"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            Attachment Defense
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="dlp"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            DLP
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="emailEncryption"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            Email Encryption
          </label>
        </div>
        <div className="form-check">
          <input
            className=""
            type="checkbox"
            name="email-security-features"
            id="inlinecheckbox2"
            value="socialMediaProtection"
          />
          <label className="form-check-label" htmlFor="inlinecheckbox2">
            Social Media Account Protection
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}
