import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function QuoteForm({ logo, name, quoteNum, handleChange, openModal }) {
  return (
    <>
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
                  type="number"
                  name="name"
                  className="input mb-6"
                  value={quoteNum}
                  onChange={handleChange}
                  required
                />
                <span className="icon is-left">
                  <FontAwesomeIcon icon="fa-solid fa-list-ol" />
                </span>
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
    </>
  );
}

export default QuoteForm;
