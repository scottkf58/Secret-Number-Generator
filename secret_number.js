'use strict';
module.exports = function() {
  var secretNumber = Math.floor((Math.random() * 1000000));

  return function () {
    return secretNumber;
  }


};