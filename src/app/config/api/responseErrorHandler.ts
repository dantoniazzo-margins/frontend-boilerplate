import { AxiosError } from "axios";

const redirectTo = (document: Document, path: string) => {
  document.location = path;
};

export const responseErrorHandler = (error: AxiosError) => {
  switch (error.response && error.response.status) {
    case 403:
      redirectTo(document, "/not-authorized");
      break;
    case 404:
      Promise.reject("ERROR 404 — NOT FOUND OR NOT EXIST");
      break;
    case 409:
      Promise.reject("ERROR 409 — CONFLICT, ALREADY EXISTS");
      break;
    case 400:
      Promise.reject("ERROR 400 — NOT VALID REQUEST");
      break;
    case 500:
      redirectTo(document, "/system-issues-500");
      break;
    case 502:
      redirectTo(document, "/bad-gateway");
      break;
    case 503:
      redirectTo(document, "/service-not-available");
      break;
    default:
      console.log("ERROR NETWORK — DEFAULT CASE");
      break;
  }
  return Promise.reject(error);
};
