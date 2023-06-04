export const requestErrorHandler = (error: unknown) => {
  return Promise.reject(error);
};
