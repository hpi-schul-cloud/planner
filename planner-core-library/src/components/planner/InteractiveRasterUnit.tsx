import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  default as InteractiveRasterRow,
  TopicElementsType
} from './InteractiveRasterRow';
import DragDropRasterElement from './dragAndDrop/DragDropRasterElement';
import DraggableRasterElement from './dragAndDrop/DraggableRasterElement';

interface PropsType {
  topicTemplates: {};
  classInstances: {};
}

interface TopicType {
  id: string;
  text: string;
  width: number;
}

interface StateType {
  topicTemplates: TopicType[];
  classInstances: {
    [classId: string]: {
      id: string;
      name: string;
      topics: TopicElementsType;
    };
  };
}

@DragDropContext(HTML5Backend)
class InteractiveRasterUnit extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      classInstances: {
        '8a': {
          id: '8a',
          name: '',
          topics: {
            1: {
              id: '1',
              text: '1.Topic',
              color: '#92DB92',
              startIndex: 0,
              endIndex: 3
            },
            2: {
              id: '2',
              text: '2.Topic',
              color: '#92DB92',
              startIndex: 4,
              endIndex: 6
            },
            3: {
              id: '3',
              text: '3.Topic',
              color: '#92DB92',
              startIndex: 8,
              endIndex: 12
            }
          }
        },
        '8b': {
          id: '8b',
          name: '',
          topics: {
            1: {
              id: '1',
              text: '1.Topic',
              color: '#92DB92',
              startIndex: 0,
              endIndex: 3
            },
            2: {
              id: '2',
              text: '2.Topic',
              color: '#92DB92',
              startIndex: 4,
              endIndex: 6
            },
            3: {
              id: '3',
              text: '3.Topic',
              color: '#92DB92',
              startIndex: 8,
              endIndex: 12
            }
          }
        }
      },
      topicTemplates: [
        { id: '4', text: 'Evolution', width: 5 },
        { id: '5', text: 'Replikation', width: 10 },
        { id: '6', text: 'Zellteilung', width: 8 }
      ]
    };
  }

  updateClassInstance = (classId: string, topics: TopicElementsType) => {
    this.setState({
      ...this.state,
      classInstances: {
        ...this.state.classInstances,
        [classId]: {
          ...this.state.classInstances[classId],
          topics
        }
      }
    });
  };

  render() {
    const { classInstances, topicTemplates } = this.state;

    return (
      <>
        {map(classInstances, classInstance => (
          <div>
            <InteractiveRasterRow
              topicElements={classInstance.topics}
              rasterSize={20}
              rasterCount={30}
              rowId={classInstance.id}
            />
          </div>
        ))}
        <div>
          {topicTemplates.map(topicTemplate => (
            <DraggableRasterElement
              id={topicTemplate.id}
              key={topicTemplate.id}
              isTransparentWhileDragging={false}
              text={topicTemplate.text}
              rasterSize={15}
              startIndex={0}
              endIndex={topicTemplate.width}
            />
          ))}
        </div>
      </>
    );
  }
}

export default InteractiveRasterUnit;
