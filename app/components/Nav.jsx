var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul>
            <li className="menu-text">
              Created by <a href="http://www.mead.io" target="_blank">Onar Berrade</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})
module.exports= Nav;
// <Link to='/'>Welcome </Link>
// <Link to='/'>About</Link>
