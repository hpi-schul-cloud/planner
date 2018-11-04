import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';
import Label from './Label';

interface PropsType {
  label?: ReactNode;
  text: ReactNode;
}

// rgba(0, 0, 0, 0.54)
const TextField: React.SFC<PropsType> = ({ label = '', text }) => {
  const labelComponent = label ? <Label caption={label} type="small" /> : null;
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        marginTop: label ? '16px' : '0px'
      }}
    >
      {labelComponent}
      <Typography variant="subheading">{text}</Typography>
    </div>
  );
};

export default TextField;
