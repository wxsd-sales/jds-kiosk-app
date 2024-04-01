import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar";
import { getQueryParams } from "../../utils/helpers";
import { generateQuoteUrl } from "../../services/redirectService";
import CustomModal from "../common/Modal";
import QuoteForm from "./QuoteForm";
import ContactAgentForm from "./ContactAgentForm";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quoteNum, setQuoteNum] = useState("");
  const [logo, setLogo] = useState("");
  const [order, setOrder] = useState("");

  const queryParams = getQueryParams();
  let location = decodeURIComponent(queryParams.location);
  let customerId = decodeURIComponent(queryParams.customerId);
  if (!customerId || ["", null, "null"].indexOf(customerId) >= 0)
    customerId = "Generic User";

  const handleChange = (e) => {
    setQuoteNum(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    const quoteUrl = generateQuoteUrl(location, customerId, quoteNum);
    window.location.hash = "";
    window.location.hash = quoteUrl;
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const logo = localStorage.getItem("logo");
    setLogo(logo);
    const order = localStorage.getItem("order");
    setOrder(order);
    setName(queryParams.firstName);
    setEmail(queryParams.email);
  }, []);
  return (
    <div className="has-navbar-fixed-top">
      <Navbar logo={logo} order={order} />
      <div className="pt-6">
        <section className="container mt-6">
          <CustomModal
            isOpen={modalIsOpen}
            closeModal={closeModal}
            order={order}
          />
          <div className="columns is-centered is-multiline">
            <QuoteForm
              name={name}
              logo={logo}
              quoteNum={quoteNum}
              handleChange={handleChange}
              openModal={openModal}
            />
            <ContactAgentForm
              customerId={customerId}
              name={name}
              email={email}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Order;
