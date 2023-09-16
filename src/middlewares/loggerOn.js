const loggerOne = (request, response, next) => {
  console.log("1");
  next();
};

module.exports = loggerOne;
