import { AxiosResponse } from "axios";

export const responseHandler = (response: AxiosResponse) => {
  const deserializedResponse = response; /* .deserialize() */
  return deserializedResponse;
};
