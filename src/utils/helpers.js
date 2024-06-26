// utils/helpers.js
export const getQueryParams = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const params = {};
  for (const [key, value] of queryParams.entries()) {
    params[key] = value;
  }
  params["location"] = decodeURIComponent(queryParams.get("location"));
  return params;
};
