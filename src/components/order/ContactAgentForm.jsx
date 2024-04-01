import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateAgentUrl } from "../../services/redirectService";

function ContactAgentForm({ customerId, name, email }) {
  const handleAgentConnect = () => {
    console.log(name);
    window.location.hash = "";
    const agentUrl = generateAgentUrl(customerId, name, email);
    window.location.hash = agentUrl;
  };
  return (
    <>
      <div className="column is-full has-text-centered">
        <h3 className="subtitle is-3 mb-6 mt-6">Looking for an expert?</h3>
        <div className="agent">
          <Button
            variant="dark"
            size="lg"
            className="button is-rounded is-large"
            onClick={() => handleAgentConnect()}
          >
            <span className="mr-3">
              <FontAwesomeIcon icon="fa-solid fa-headset" />
            </span>
            <span>Connect with an Agent</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ContactAgentForm;
