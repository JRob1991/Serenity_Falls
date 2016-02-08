import React from 'react';
import QuoteField from '../components/quote';
import FormNew from '../components/form';
import ButtonForm from '../components/button';

const BackgroundImg = () => {

  const style = {
    fontWeight: 'bold',
    backgroundImage: 'url(../images/pondbg.jpg)',
    backgroundSize: '100% 100%',
    height: '450px',
    width: '80%',
    margin: '0 auto',
    marginBottom: '25px',
    lineHeight: '1.3em',
    border: '3px solid #FFF',
    borderRadius: '10px',
    paddingBottom: '20px',
  };

  return (
    <div className="background" style={style}>
    <ButtonForm></ButtonForm>
    </div>
  );
};

export default BackgroundImg;
