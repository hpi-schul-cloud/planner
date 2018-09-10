import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import TextArea from './TextArea';

const Div1 = styled.div`
  background: red;
`;
const Div2 = styled.div`
  background: blue;
`;
const Div3 = styled.div`
  background: green;
`;

class ReactButton extends React.Component<{
  onClick: () => void;
  caption: string;
}> {
  render() {
    return <Div3 onClick={this.props.onClick}>{this.props.caption}</Div3>;
  }
}

const Button1: React.SFC<{ onClick: () => void; caption: string }> = ({
  onClick,
  caption
}) => {
  return <Div1 onClick={onClick}>{caption}</Div1>;
};

const Button2: React.SFC<{ onClick: () => void; caption: string }> = ({
  onClick,
  caption
}) => {
  return <Div2 onClick={onClick}>{caption}</Div2>;
};

const buttonMap: {
  [id: string]: React.SFC<any> | React.ComponentClass<any>;
} = {
  1: Button1,
  2: Button2,
  3: ReactButton
};

const TestRender: React.SFC<{
  onClick: () => void;
  caption: string;
  buttonType: string;
}> = ({ onClick, caption, buttonType }) => {
  const Element: React.ComponentClass<{
    onClick: () => void;
    caption: string;
  }> = getButtonElement();

  return <Element caption={caption} onClick={onClick} />;
};

const Test: React.SFC<{ buttonType: string }> = ({ buttonType }) => {
  return (
    <TestRender
      caption={'Hallo'}
      onClick={() => console.log('Hallo')}
      buttonType={buttonType}
    />
  );
};

export default Test;

function getButtonElement() {
  return ReactButton;
}
