import React from 'react';

type PropsType = {
  color: string;
};

const SvgComponent = (props: PropsType) => (
  <svg width={12} height={8} {...props}>
    <title>path5990</title>
    <path
      d="M1.02 7.37a.99.99 0 0 1-.935-.6 1.019 1.019 0 0 1 .192-1.105L5.225.317a.984.984 0 0 1 1.444 0l4.948 5.348c.255.26.35.64.25.992a.998.998 0 0 1-.735.7.982.982 0 0 1-.96-.314L5.947 2.477 1.722 7.043a.985.985 0 0 1-.701.327z"
      fill="color"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
