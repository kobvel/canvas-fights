"use strict";
var GulpConfig = (function(){
  function GulpConfig(argument) {
    this.vendors = {
      js:      ['./bower_components/bootstrap/dist/js/bootstrap.js', './bower_components/bootstrap-switch/dist/js/bootstrap-switch.js'
              ],
      css:     ['./bower_components/bootstrap/dist/css/bootstrap.css', './bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css'],
    };

    this.app = {
      js:     ['./src/js/BaseModel/baseModel.js', './src/js/godservice/godservice.js', './src/js/app.js'],
      css:    ['./src/css/*.css'],
      index:  ['./src/index.html']
    };
  }
  return GulpConfig;

})();

module.exports = GulpConfig;