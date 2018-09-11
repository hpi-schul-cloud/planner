import React from 'react';
import Typography from '@material-ui/core/Typography';

interface PropsType {
  caption: string;
}

const Headline: React.SFC<PropsType> = ({ caption }) => {
  return (
    <Typography variant="title" gutterBottom>
      {caption}
    </Typography>
  );
};

export default Headline;
