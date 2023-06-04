export const envVars = {
  nodeEnv: process.env.NODE_ENV || "development",
  api: {
    https: process.env.REACT_APP_BACKEND_URL_TESTING,
    wss: process.env.REACT_APP_BACKEND_SOCKET_URL_TESTING,
  },
};
