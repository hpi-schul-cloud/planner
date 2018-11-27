import React, { Component } from 'react';

interface PropsType {
  width: number;
  height: number;
  text?: string;
  color: string;
  markers?: { position: number; width: number; text: string }[];
  onClick?: () => void;
}

class TopicElement extends Component<PropsType> {
  render() {
    const { height, color, text, width, markers, onClick } = this.props;

    return (
      <div
        style={{
          boxSizing: 'border-box',
          height: `${height}px`,
          width: `${width}px`,
          background: color,
          border: '1px solid transparent',
          borderRadius: 5,
          textAlign: 'center',
          cursor: onClick ? 'pointer' : 'inherit',
          display: 'inline-block',
          verticalAlign: 'top',
          position: 'relative'
        }}
        onClick={onClick}
      >
        <div
          style={{
            userSelect: 'none',
            pointerEvents: 'none',
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: 13,
            /* height - border width */
            lineHeight: `${height - 2}px`,
            color: '#4a4a4a'
          }}
        >
          {text}
        </div>
        {markers &&
          markers.map(marker => (
            <span
              style={{
                top: '-4px',
                background: '#ff0000b5',
                left: `${marker.position}px`,
                height: '3px',
                position: 'absolute',
                width: `${marker.width}px`
              }}
            />
          ))}
      </div>
    );
  }

  static defaultProps = {
    size: 'small',
    color: '#FFFFFF'
  };
}

export default TopicElement;
