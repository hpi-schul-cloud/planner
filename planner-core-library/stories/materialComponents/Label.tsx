import React from 'react';
import Typography from '@material-ui/core/Typography';

interface PropsType {
  caption: string;
  className?: string;
}

const Label: React.SFC<PropsType> = ({ caption, className }) => {
  return (
    <span className={className}>
      <Typography variant="caption">{caption}</Typography>
    </span>
  );
};

export default Label;
