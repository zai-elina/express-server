const loggerTwo = (request, response, next) => {
  console.log("2");
  next();
};

module.exports = loggerTwo;
