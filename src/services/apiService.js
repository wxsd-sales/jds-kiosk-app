import axios from "axios";

export const fetchCustomerName = (customerId) => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/detail/${customerId}`;
  const headers = { "Content-Type": "application/json" };

  return axios.get(apiUrl, { headers });
};
