angular// chainable
  .module('counter', []) //regestering app as a module using .module()
  .controller('CounterController', CounterController); // name, function. Give them same names

function CounterController() {
  this.number = 0;

  this.increment = () => {this.number++};
  this.decrement = () => {this.number--};
}
