const isProduction = process.env.IS_PRODUCTION === "true";

const appConfig = {
  dbUrl: isProduction ? process.env.MONGO_URL_PROD : process.env.MONGO_URL_DEV,
};

export { appConfig };
