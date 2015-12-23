"use strict";
var GulpConfig = (function(){
  function GulpConfig(argument) {
    this.vendors = {
      js:      ['./bower_components/bootstrap/dist/js/bootstrap.js',
              ],
      css:     ['./bower_components/bootstrap/dist/css/bootstrap.css'],
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