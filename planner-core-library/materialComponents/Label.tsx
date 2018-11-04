import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

interface PropsType {
  caption: ReactNode;
  type?: 'small' | 'medium' | 'large';
  className?: string;
}

const typeMap: { [type: string]: 'subheading' | 'body1' | 'caption' } = {
  large: 'subheading',
  medium: 'body1',
  small: 'caption'
};

const Label: React.SFC<PropsType> = ({
  caption,
  className,
  type = 'medium'
}) => {
  return (
    <span className={className} style={{ marginBottom: 5 }}>
      <Typography variant={typeMap[type]}>{caption}</Typography>
    </span>
  );
};

export default Label;
