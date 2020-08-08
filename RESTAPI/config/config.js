const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 9999,
    dbURL:
      "mongodb://Krum:semejstvo@cluster0-shard-00-00.kojxg.gcp.mongodb.net:27017,cluster0-shard-00-01.kojxg.gcp.mongodb.net:27017,cluster0-shard-00-02.kojxg.gcp.mongodb.net:27017/Origami?ssl=true&replicaSet=atlas-qw6utl-shard-0&authSource=admin&retryWrites=true&w=majority",
    authCookieName: "x-auth-token",
  },
  production: {},
};

module.exports = config[env];
