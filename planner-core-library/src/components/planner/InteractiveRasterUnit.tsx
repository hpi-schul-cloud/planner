import React, { Component } from 'react';
import map from 'lodash/map';
import throttle from 'lodash/throttle';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  default as InteractiveRasterRow,
  TopicElementsType
} from './InteractiveRasterRow';
import DraggableRasterElement from './dragAndDrop/DraggableRasterElement';
import { TOPIC_TEMPLATE } from './constants';

interface PropsType {
  topicTemplates: TopicType[];
  classInstances: {
    [classId: string]: {
      id: string;
      name: string;
      topics: TopicElementsType[];
    };
  };
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
      topics: TopicElementsType[];
    };
  };
  tempClassInstances: {
    [classId: string]: {
      id: string;
      name: string;
      topics: TopicElementsType[];
    };
  };
  isDragging: boolean;
}

@DragDropContext(HTML5Backend)
class InteractiveRasterUnit extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      topicTemplates: props.topicTemplates,
      classInstances: props.classInstances,
      tempClassInstances: { ...props.classInstances },
      isDragging: false
    };
  }

  softRelocateTopicElement = throttle(
    (
      rowId: string,
      elementIndex: number,
      insertStartIndex: number,
      width: number,
      { text }: { text: string }
    ) => {
      console.log(`Soft Relocate Topic Element ${rowId} ${insertStartIndex}`);
      this.setState({
        ...this.state,
        isDragging: true
      });
    },
    100
  );

  softInsertTopicElement = throttle(
    (
      rowId: string,
      insertStartIndex: number,
      width: number,
      { text }: { text: string }
    ) => {
      console.log(`Soft Insert Topic Element ${rowId} ${insertStartIndex}`);
      this.setState({
        ...this.state,
        isDragging: true
      });
    },
    100
  );

  updateClassInstance = (classId: string, topics: TopicElementsType[]) => {
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
          <div key={classInstance.id}>
            <InteractiveRasterRow
              topicElements={classInstance.topics}
              rasterSize={20}
              rasterCount={30}
              rowId={classInstance.id}
              key={classInstance.id}
              updateElements={topics =>
                this.updateClassInstance(classInstance.id, topics)
              }
              softRelocateTopicElement={this.softRelocateTopicElement}
              softInsertTopicElement={this.softInsertTopicElement}
            />
          </div>
        ))}
        <div>
          {topicTemplates.map(topicTemplate => (
            <DraggableRasterElement
              id={topicTemplate.id}
              key={topicTemplate.id}
              type={TOPIC_TEMPLATE}
              isTransparentWhileDragging={false}
              text={topicTemplate.text}
              rasterSize={20}
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
