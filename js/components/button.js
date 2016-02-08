import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  bottom: '45%',
  right: '45%',
  position: 'absolute',
  fontWeight: 'bold',
  opacity: '0.8',
};

const ButtonForm = () => (
  <div>
    <RaisedButton
    label="Request A Quote!"
    secondary={true}
    style={style}
    linkButton={true}
    href="#slick-popup"
    />
  </div>
);

export default ButtonForm;
