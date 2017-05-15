'use strict';

/**
 * Module Dependencies
 */
const React = require('react');
const inherits = require('inherits');
const _proto = require('./prototype');
const delcss = require('inject-css')(require('./style/style.scss'));
const styles = require('./style/styles');
const files = require('./style/images.files');
const RaisedButton = require('material-ui/RaisedButton').default;


/**
 * inherits and expose module
 */
inherits(Cover, React.Component);
module.exports = Cover;
var prototype = Object.assign(Cover.prototype, _proto);

/**
 * @constructor
 */
function Cover(props) {
  React.Component.call(this, props);
  this.state = {seconds: 0};

  this.restart = this.restart();
}

/**
 * @public
 * @return {ReactElement}
 */
prototype.render = function() {

  var containerStyl = styles.container();
  var containerClass = 'cover';

  return (

    /*jshint ignore:start*/
    <div className={containerClass}>
      <h1>React Starter kit</h1>
      <p>
        Powerful frontend React Component Starter Kit.<br />
        Support jsx, js, css, scss, styl, and automatically move image files in other appstackr projects.<br />
        <a href="http://material-ui.com">material-ui</a> and <a href="https://www.npmjs.com/package/react-tap-event-plugin">react-tap-event-plugin</a> ready.
      </p>
      <div><img src="/img/clipart/img.png" width="150" height="205" /></div>
      <p className="footer">
        Powered by <a href="https://github.com/benpptung/appstackr">appstackr</a>.
        &nbsp;
        <RaisedButton label="restart" primary={true} onTouchTap={this.restart} />
        &nbsp; {this.state.seconds} seconds elapsed.
      </p>
    </div>
    /*jshint ignore:end*/
  );
};