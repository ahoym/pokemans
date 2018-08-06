/*
A separate module is recommended so that we have a clear module for making
fully configured requests from our application. Other things that might live
here may be:

- Add headers that our backend may expect
- Default parsing of response objects
- Add general error handling

These are all things that are handy for all requests, and not just in the
context of async actions in redux.
*/
import camelize from 'camelize';

export default function request({ endpoint }) {
  return fetch(endpoint).then(response => response.json());
}

/**
 * Normalizes responses from the endpoint into a format the frontend expects
 *
 * @param {Object} response body from the XhrResponse
 * @returns {Object} of the response object with camelized keys
 */
export function successNormalizer(response) {
  return camelize(response);
}

// Simple closure around request, for redesert-api-thunk
export function wrappedRequest(props) {
  return () => request(props);
}
