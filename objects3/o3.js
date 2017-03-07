function VehicleConstructor(name, wheels, passangerNumber, speed){
  if(!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passangerNumber, speed);
  }


var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

this.distanceTraveled = 0;
this.speed = speed;
this.name = name;
this.wheels = wheels;
this.passangerNumber = passangerNumber;
this.vin = createVin();

function createVin(){
  var vin = '';
  for(var i = 0; i < 17; i+=1){
    vin += chars[Math.floor(Math.random()*35)];
  }
  return vin;
}

}

VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk Honk";
  console.log(noise);
  return this;
};

VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  this.updateDistanceTraveled();
  return this;
};

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distanceTraveled += this.speed;
  console.log(this.distanceTraveled);
  return this;
};

VehicleConstructor.prototype.createVin = function(){
  console.log(this.vin);
  return this;
};

var car = new VehicleConstructor('car', 4, 4, 100);
car.createVin();
