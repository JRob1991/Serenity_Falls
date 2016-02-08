import React from 'react';
import NavBar from '../components/navbar';
import GridListImg from '../components/cardavatar';
import BackgroundImg from '../components/background';
import BackgroundFull from '../components/backgroundfull';
import QuoteField from '../components/quote';
import Border from '../components/border';

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
        <GridListImg></GridListImg>
      </div>
    );
  }

});
