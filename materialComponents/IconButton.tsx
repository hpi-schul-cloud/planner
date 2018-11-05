import React from 'react';
import MaterialIconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

type PropsType = {
  iconType: 'ADD';
  onClick: () => void;
};

const IconButton: React.SFC<PropsType> = props => {
  return (
    <MaterialIconButton onClick={props.onClick} aria-label="Add">
      <AddIcon />
    </MaterialIconButton>
  );
};

export default IconButton;
