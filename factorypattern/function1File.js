const carFunc = function ({ name, model, type }, done) {
  done(null, { name, model, type })
};

module.exports = carFunc