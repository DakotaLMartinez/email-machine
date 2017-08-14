import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  // add a constructor for state using 'reactstate'
  //static propTypes = {
  //  stringProp: PropTypes.string.isRequired,
  //  arrayProp: PropTypes.array.isRequired,
  //  funcProp: PropTypes.func.isRequired
  //};

  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" className="left brand-logo">
            EmailMachine
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a>Log In With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// for docs on prop type validations type `reactvalidateproptypedocs`

export default Header;
