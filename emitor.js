var util = require('util');
var events = require('events');

function Child(options) {
  events.EventEmitter.call(this);
  this.options = options;
};
util.inherits(Child, events.EventEmitter); 

Child.prototype.output = function() {
  console.log('output' + this.options);
};

var options = {
  op1: 'op1'
};

var child = new Child(options);
child.on('event1', function(arg1, arg2){
  console.log('event1: ' + arg1 + ', ' + arg2 );
});

child.emit('event1', 'value1', 'value2');
child.output();
