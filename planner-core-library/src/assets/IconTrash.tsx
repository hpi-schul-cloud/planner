import React from 'react';

type PropsType = {
  width?: number;
  height?: number;
  color?: string;
};

const IconTrash: React.SFC<PropsType> = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path
      d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"
      fill={props.color || 'currentColor'}
    />
  </svg>
);

export default IconTrash;
