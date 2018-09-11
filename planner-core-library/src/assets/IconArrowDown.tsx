import React from 'react';

type PropsType = {
  color: string;
};

const SvgComponent = (props: PropsType) => (
  <svg width={12} height={8} {...props}>
    <title>path5990</title>
    <path
      d="M1.02.013a.99.99 0 0 0-.935.599c-.163.374-.087.811.192 1.106l4.948 5.347a.984.984 0 0 0 1.444 0l4.948-5.347c.255-.26.35-.64.25-.992a.998.998 0 0 0-.735-.701.982.982 0 0 0-.96.314L5.947 4.906 1.722.339A.985.985 0 0 0 1.02.013z"
      fill={props.color}
      fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
