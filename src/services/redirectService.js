export const generateOrderUrl = (location, customerId, firstName, email) => {
  return `/order?location=${location}&customerId=${customerId}&firstName=${encodeURIComponent(
    firstName
  )}&email=${encodeURIComponent(
    email
  )}#command=arrived&location=${encodeURIComponent(
    location
  )}&customerId=${customerId}&channelType=Visit`;
};

export const generateQuoteUrl = (location, customerId, quoteNum) => {
  return `#command=quote&location=${encodeURIComponent(
    location
  )}&customerId=${customerId}&channelType=Quote&quoteNumber=${quoteNum}`;
};

export const generateAgentUrl = (customerId, name, email) => {
  return `#command=agent-connect&customerId=${customerId}&customerName=${name}&customerEmail=${encodeURIComponent(
    email
  )}`;
};
