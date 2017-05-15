'use strict';

var prototype = exports.prototype = {};

prototype.tick = function() {
  this._timer = setInterval(_=> this.setState({seconds: ++this.state.seconds}), 1000);
};

prototype.restart = function() {
  return event=> {
    this.setState({seconds: 0});
  }
}