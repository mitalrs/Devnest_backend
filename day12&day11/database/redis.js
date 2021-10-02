const redis = require("redis");
const connectRedis = require("connect-redis"); //connection istablish
const session = require("express-session");

//redis store
const RedisStore = connectRedis(session);

//redisclient
const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

//error handing
redisClient.on("error", function (err) {
  console.error("could not connect to reddis", err);
});

//for connect
redisClient.on("connect", function () {
  console.log("connect to redis");
});

//export function
module.exports = {
  redisClient,
  RedisStore,
  session,
};
