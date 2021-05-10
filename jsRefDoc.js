////Function.prototype.bind():

//The bind() method creates a new function that, when called, has its this 
//keyword set to the provided value, with a given sequence
//of arguments preceding any provided when the new function is called.
const module = {
    x: 42,
    getX: function() {
              setTimeout( function() {
              //return this.x;
              console.log(this.x);
              }.bind(this), 500);
            }
  };
  
  //const unboundGetX = module.getX;
  //console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  //const boundGetX = unboundGetX.bind(module);
  //console.log(boundGetX());
  // expected output: 42
  
//   var m = new  Object(module);
//   m.getX();

//// WindowOrWorkerGlobalScope.clearTimeout()
// The clearTimeout() method of the WindowOrWorkerGlobalScope mixin cancels
//  a timeout previously established by calling setTimeout().
// Run the script below in the context of a web page and click on the page once. 
// You'll see a message popping up in a second. If you click the page multiple 
// times in one second, the alert only appears once.
var alarm = {
    remind: function(aMessage) {
      console.log(aMessage);
      this.timeoutID = undefined;
    },
  
    setup: function() {
      if (typeof this.timeoutID === 'number') {
        this.cancel();
      }
  
      this.timeoutID = window.setTimeout(function(msg) {
        this.remind(msg);
      }.bind(this), 1000, 'Wake up!');
    },
  
    cancel: function() {
      window.clearTimeout(this.timeoutID);
    }
  };
//   window.onclick = function() { alarm.setup(); };
let i = 0;
var idTime = setTimeout(()=>{
    console.log(i);
    i++;
}, 1000);
setTimeout(()=>{
    console.log(i);
}, 2000);
  