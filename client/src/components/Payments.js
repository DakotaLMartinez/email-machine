import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  // add a constructor for state using 'reactstate'
  //static propTypes = {
  //  stringProp: PropTypes.string.isRequired,
  //  arrayProp: PropTypes.array.isRequired,
  //  funcProp: PropTypes.func.isRequired
  //};

  render() {
    return (
      <StripeCheckout
        name="EmailMachine"
        description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

//Payments.defaultProps = {
//
//};

// for docs on prop type validations type `reactvalidateproptypedocs`

export default Payments;
