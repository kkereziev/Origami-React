const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 9999,
    dbURL:
      "mongodb+srv://Krum:semejstvo@cluster0.kojxg.gcp.mongodb.net/Origami?retryWrites=true&w=majority",
    authCookieName: "x-auth-token",
  },
  production: {},
};

module.exports = config[env];
