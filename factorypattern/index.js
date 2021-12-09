const vehicleFactory = require("./factoryFile");

vehicleFactory.getVehicle("carFunc", { name: "Honda", model: "Sedan", type: "GT" }, (err, result) => {
  console.log(err, result);
});
vehicleFactory.getVehicle("bikeFunc", { name: "Bullet", type: "GT" }, (err, result) => {
  console.log(err, result);
});
