import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomerIDForm({
  formData,
  handleChange,
  handleSubmit,
  idError,
  logo,
}) {
  return (
    <div className="columns is-centered is-multiline">
      <div className="column is-half">
        <figure className="image">
          <img src={logo} alt="pro" />
        </figure>
      </div>
      <div className="column is-full has-text-centered mt-6">
        <h3 className="subtitle is-3 mb-6">
          Know your Customer ID? Enter it below for a personalized experience!
        </h3>
      </div>
      <div className="column is-full">
        <div className="columns">
          <div className="column is-2"></div>
          <div className="column is-8">
            <form onSubmit={handleSubmit}>
              <div className="control has-icons-left mb-6">
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
                {idError && <p className="help is-danger is-left">{idError}</p>}
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
  );
}

export default CustomerIDForm;
