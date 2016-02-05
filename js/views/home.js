import React from 'react';
import NavBar from '../components/navbar';
import GridListImg from '../components/cardavatar';
import BackgroundImg from '../components/background';
import QuoteField from '../components/quote';

export default React.createClass({

  formClickHandler() {
    this.props.onFormClick();
  },

  spinClickHandler() {
    this.props.onSpinClick();
  },

  render() {
    return (
      <div>
        <div className="bgPadding">
        <BackgroundImg></BackgroundImg>
        </div>
        <GridListImg></GridListImg>
      </div>
    );
  }

});
