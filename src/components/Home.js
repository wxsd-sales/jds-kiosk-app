import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search);
  let LOCATION = decodeURIComponent(queryParameters.get("location"));
  console.log(`location:${LOCATION}`);

  const ORDER_PATH =
    "/order?location=" + encodeURIComponent(LOCATION) + "&customerId=";
  const HASH_COMMAND_ARRIVED =
    "#command=arrived&location=" +
    encodeURIComponent(LOCATION) +
    "&customerId=";

  const [formData, setFormData] = useState({
    name: "",
  });
  const [logo, setLogo] = useState("");
  const [idError, setIdError] = useState("");

  useEffect(() => {
    // Function to get query parameters from URL
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
    console.log(JSON.stringify(queryParams));
    setLogo(queryParams.logo);
    localStorage.setItem("logo", queryParams.logo);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = `https://all4jds.glitch.me/firstName/${formData.name}`;

    // Define your headers
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          console.log(response.data);

          const name = response.data.name;
          setIdError("");
          navigate(
            ORDER_PATH +
              formData.name +
              "&firstName=" +
              name +
              HASH_COMMAND_ARRIVED +
              formData.name +
              "&channelType=Visit"
          );
        }
      })
      .catch((error) => {
        console.log(error.status);
        console.log(error.message);
        setIdError("Entered Customer ID is not found");
        console.error(error);
      });
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
        <div className="container mt-6">
          <div className="columns is-centered is-multiline">
            <div className="column is-half">
              <figure className="image ">
                <img src={logo} alt="pro" />
              </figure>
            </div>
            <div className="column is-full has-text-centered mt-6">
              <h3 className="subtitle is-3 mb-6">
                Know your Customer ID? Enter it below for a personalized
                experience!
              </h3>
            </div>
            <div className="column is-full">
              <div className="columns">
                <div className="column is-2"></div>
                <div className="column is-8">
                  <form onSubmit={handleSubmit}>
                    <div className="control has-icons-left  mb-6">
                      <input
                        type="password"
                        name="name"
                        className="input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <span className="icon is-left">
                        <FontAwesomeIcon icon="fa-solid fa-lock" />
                      </span>
                      {idError && (
                        <p class="help is-danger is-left">{idError}</p>
                      )}
                    </div>
                    <div className="columns is-centered">
                      <div
                        className="column is-half is-align-items-center is-justify-content-center"
                        style={{ display: "flex" }}
                      >
                        <Button
                          variant="dark"
                          size="lg"
                          className="button is-rounded is-large"
                          type="submit"
                        >
                          <span className="mr-3">
                            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                          </span>
                          <span>Start</span>
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="column is-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
