// services/customerService.js
import axios from "axios";

export const fetchCustomerName = (customerId) => {
  const apiUrl = `https://all4jds.glitch.me/firstName/${customerId}`;
  const headers = { "Content-Type": "application/json" };

  return axios.get(apiUrl, { headers });
};
