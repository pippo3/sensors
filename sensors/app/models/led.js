// Constructor
function led(gpio, color, status) {
  // always initialize all instance properties
  this.gpio = gpio;
  this.color = color;
  this.status = status;
}
// class methods
led.prototype.fooBar = function() {

};
// export the class
module.exports = led;

