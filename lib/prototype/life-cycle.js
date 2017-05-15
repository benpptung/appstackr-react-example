'use strict';

var prototype = exports.prototype = {};

/**
 * @protected
 */
prototype.componentDidMount = function() {
  this.tick();
};

/**
 * @protected
 */
prototype.componentWillUnmount = function() {
  clearInterval(this._timer);
};