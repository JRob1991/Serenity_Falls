import React from 'react';
import TextField from 'material-ui/lib/text-field';

const QuoteField = () => (
  <div>
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
    /><br/>
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    /><br/>
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    /><br/>
  </div>
);

export default QuoteField;
