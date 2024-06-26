import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import { getQueryParams } from "../../utils/helpers";
import { fetchCustomerName } from "../../services/apiService";
import CustomerIDForm from "./CustomerIDForm";
import { generateOrderUrl } from "../../services/redirectService";
import ErrorMessage from "./ErrorMessage";

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "" });
  const [logo, setLogo] = useState("");
  const [order, setOrder] = useState("");
  const [logoError, setLogoError] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const [idError, setIdError] = useState("");
  const queryParams = getQueryParams();

  useEffect(() => {
    if (!queryParams.logo) {
      setLogoError(true);
    } else {
      setLogoError(false);
      localStorage.setItem("logo", queryParams.logo);
      setLogo(queryParams.logo);
    }
    if (!queryParams.order) {
      setOrderError(true);
    } else {
      setOrderError(false);
      localStorage.setItem("order", queryParams.order);
      setOrder(queryParams.order);
    }
  }, [queryParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCustomerName(formData.name)
      .then((resp) => {
        setIdError("");
        const orderUrl = generateOrderUrl(
          queryParams.location,
          formData.name,
          resp.data.name,
          resp.data.email
        );
        navigate(orderUrl);
      })
      .catch((error) => {
        setIdError("Entered Customer ID is not found");
        console.error(error);
      });
  };

  return (
    <div className="has-navbar-fixed-top">
      <Navbar logo={logo} order={order} />
      <div className="pt-6">
        <div className="container mt-6">
          {logoError || orderError ? (
            <ErrorMessage logoError={logoError} orderError={orderError} />
          ) : (
            <CustomerIDForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              idError={idError}
              logo={logo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
