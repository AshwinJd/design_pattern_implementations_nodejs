const carFunc = require("./function1File");
const bikeFunc = require("./function2File");

const vehicleProcess = { carFunc, bikeFunc };

function vehicleFactory(type, parameters, done) {
  const getVehicle = vehicleProcess[type];
  return new getVehicle(parameters, done);
}

module.exports = {
  vehicleFactory
}