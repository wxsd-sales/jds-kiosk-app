import React from "react";

function HomeMessage({ logoError, orderError }) {
  if (logoError || orderError) {
    const errorMessage = logoError
      ? "Please define your customer logo URL in the URL Parameters"
      : "Please define the order receipt image URL in the URL Parameters";
    return (
      <div className="columns is-centered">
        <div className="column is-half is-full has-text-centered">
          <h1 className="title is-1 mb-6">{errorMessage}</h1>
        </div>
      </div>
    );
  }

  return null;
}

export default HomeMessage;
