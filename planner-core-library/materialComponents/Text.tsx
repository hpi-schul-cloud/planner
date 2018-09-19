import React from 'react';
import Typography from '@material-ui/core/Typography';
import Label from './Label';

interface PropsType {
  label?: string;
  text: string;
}

const TextField: React.SFC<PropsType> = ({ label = '', text }) => {
  const labelComponent = label ? <Label caption={label} /> : null;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      {labelComponent}
      <Typography variant="subheading">{text}</Typography>
    </div>
  );
};

export default TextField;
