const bikeFunc = function ({ name, type }, done) {
  done(null, { name, type });
};

module.exports = bikeFunc