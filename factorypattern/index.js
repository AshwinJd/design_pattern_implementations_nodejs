const { vehicleFactory } = require("./factoryFile");

vehicleFactory("carFunc", { name: "Honda", model: "Sedan", type: "GT" }, (err, result) => {
  console.log(err, result);
});
vehicleFactory("bikeFunc", { name: "Bullet", type: "GT" }, (err, result) => {
  console.log(err, result);
});
