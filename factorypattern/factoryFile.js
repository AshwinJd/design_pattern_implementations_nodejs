const carFunc = require("./function1File");
const bikeFunc = require("./function2File");

const VehicleFactory = { carFunc, bikeFunc };

function getVehicle(type, parameters, done) {
  const vehicleFactory = VehicleFactory[type];
  return new vehicleFactory(parameters, done);
}

module.exports = {
  getVehicle
}