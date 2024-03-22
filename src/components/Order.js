import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

function Order() {
  const { state } = useLocation();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [idError, setIdError] = useState("");
  const [logo, setLogo] = useState("");

  const queryParameters = new URLSearchParams(window.location.search);
  let LOCATION = decodeURIComponent(queryParameters.get("location"));
  console.log(`location:${LOCATION}`);
  let CUSTOMER_ID = decodeURIComponent(queryParameters.get("customerId"));
  console.log(`customerId:${CUSTOMER_ID}`);
  if (!CUSTOMER_ID || ["", null, "null"].indexOf(CUSTOMER_ID) >= 0)
    CUSTOMER_ID = "Generic User";

  const HASH_COMMAND_QUOTE =
    "#command=quote&location=" +
    encodeURIComponent(LOCATION) +
    "&customerId=" +
    CUSTOMER_ID;
  const HASH_COMMAND_AGENT =
    "#command=agent-connect&customerId=" +
    CUSTOMER_ID +
    "&customerName=" +
    encodeURIComponent(displayName) +
    "&customerEmail=" +
    encodeURIComponent(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (e) => {
    e.preventDefault();
    window.location.hash = "";
    window.location.hash =
      HASH_COMMAND_QUOTE + "&channelType=Quote&quoteNumber=" + formData.name;
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      maxWidth: "1500px", // Set the desired maximum width
      margin: "auto", // Center the modal horizontally
    },
  };

  useEffect(() => {
    const logo = localStorage.getItem("logo");
    setLogo(logo);
    console.log(CUSTOMER_ID);
    const getQueryParams = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const params = {};
      for (const [key, value] of queryParams.entries()) {
        params[key] = value;
      }
      return params;
    };

    // Get query parameters
    const queryParams = getQueryParams();
    setName(queryParams.firstName);
  }, []);

  const handleAgentConnect = (state) => {
    const prettyDestination = "Agent Connect";
    window.location.hash = "";
    window.location.hash = HASH_COMMAND_AGENT;
  };
  return (
    <div className="has-navbar-fixed-top">
      <nav
        className="navbar  is-fixed-top has-shadow p-0"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to={`/?logo=${encodeURIComponent(logo)}`}
          >
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <div className="pt-6">
        <section className="container mt-6">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            style={customStyles}
          >
            {/* Image in the modal */}
            <div>
              <img
                src="https://cdn.glitch.global/162db15e-db3c-41fb-8997-96647c7ffc2a/pdf-page.png?v=1706033718849"
                alt="Modal Image"
              />
            </div>

            {/* Close button */}
            <Button
              variant="dark"
              size="lg"
              className="rounded-pill btn"
              onClick={closeModal}
            >
              <span className="mr-3">
                <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
              </span>
              <span>Close</span>
            </Button>
          </Modal>
          <div className="columns is-centered is-multiline">
            <div className="column is-half">
              <figure className="image ">
                <img src={logo} alt="pro" className="App-logo" />
              </figure>
            </div>
            <div className="column is-full has-text-centered">
              <h1 className="title is-1 mb-6">Welcome {name}!</h1>
            </div>
            <div className="column is-full has-text-centered">
              <h3 className="subtitle is-3 mb-5">
                Enter the Quote Number you'd like to review
              </h3>
            </div>
            <div className="column is-full has-text-centered">
              <div className="columns is-centered">
                <div className="column is-half">
                  <form onSubmit={openModal}>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        name="name"
                        className="input mb-6"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <span className="icon is-left">
                        <FontAwesomeIcon icon="fa-solid fa-list-ol" />
                      </span>

                      {idError && (
                        <span style={{ color: "red" }}>{idError}</span>
                      )}
                    </div>
                    <Button
                      variant="dark"
                      size="lg"
                      className="button is-rounded is-large mb-6"
                      type="submit"
                    >
                      <span className="mr-3">
                        <FontAwesomeIcon icon="fa-solid fa-receipt" />
                      </span>
                      <span>Show Order</span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="column is-full has-text-centered">
              <h3 className="subtitle is-3 mb-6 mt-6">
                Looking for an expert?
              </h3>
              <div className="agent">
                <Button
                  variant="dark"
                  size="lg"
                  className="button is-rounded is-large"
                  onClick={() => handleAgentConnect(state)}
                >
                  <span className="mr-3">
                    <FontAwesomeIcon icon="fa-solid fa-headset" />
                  </span>
                  <span>Connect with an Agent</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Order;
