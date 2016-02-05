import React from 'react';
import QuoteField from '../components/quote';

const BackgroundImg = () => {
  const style = {
    fontWeight: 'bold',
    backgroundImage: 'url(../images/Backgroundbg.jpg)',
    backgroundSize: '100% 100%',
    height: '400px',
    margin: '0 auto',
    marginBottom: '5px',
  };

  return (
    <div className="background" style={style}>
    </div>
  );
};

export default BackgroundImg;
