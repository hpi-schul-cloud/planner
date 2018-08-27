import React, { Component } from 'react';
import map from 'lodash/map';
import throttle from 'lodash/throttle';
import cloneDeep from 'lodash/cloneDeep';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  default as InteractiveRasterRow,
  TopicElementsType
} from './InteractiveRasterRow';
import DraggableRasterElement from './dragAndDrop/DraggableRasterElement';
import { TOPIC_TEMPLATE } from './constants';
import {
  getClassTopicsAfterInsertion,
  getClassTopicsAfterMove
} from './helper';

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
      classInstances: props.classInstances,
      tempClassInstances: props.classInstances,
      isDragging: false
    };
  }

  // static getDerivedStateFromProps(nextProps: PropsType, prevState: StateType) {
  //   console.log('get derived state from props');
  //   return {
  //     ...prevState,
  //     tempClassInstances: nextProps.classInstances
  //   };
  // }

  resetDragState = () => {
    // Cancel throttling
    this.softRelocateTopicElement.cancel();
    this.softInsertTopicElement.cancel();

    this.setState({
      ...this.state,
      tempClassInstances: { ...this.state.classInstances },
      isDragging: false
    });
  };

  commitCurrentDragState = () => {
    // Cancel throttling
    this.softRelocateTopicElement.cancel();
    this.softInsertTopicElement.cancel();

    this.setState({
      isDragging: false
    });
    // props.updateClassInstances(this.state.tempClassInstances);
  };

  softRelocateTopicElement = throttle(
    (
      rowId: string,
      elementIndex: number,
      insertStartIndex: number,
      width: number,
      elementValues: Partial<TopicElementsType>
    ) => {
      const newTemporaryClassTopics = getClassTopicsAfterMove(
        insertStartIndex,
        elementIndex,
        width,
        elementValues,
        30, // rasterCount
        this.state.classInstances[rowId].topics
      );
      const newTempClassInstances = {
        ...this.state.classInstances,
        [rowId]: {
          ...this.state.classInstances[rowId],
          topics: newTemporaryClassTopics
        }
      };

      this.setState({
        isDragging: true,
        tempClassInstances: newTempClassInstances
      });
    },
    100
  );

  softInsertTopicElement = throttle(
    (
      rowId: string,
      insertStartIndex: number,
      width: number,
      elementValues: Partial<TopicElementsType>
    ) => {
      const newTemporaryClassTopics = getClassTopicsAfterInsertion(
        insertStartIndex,
        width,
        elementValues,
        30, // rasterCount
        this.state.classInstances[rowId].topics
      );
      const newTempClassInstances = {
        ...this.state.classInstances,
        [rowId]: {
          ...this.state.classInstances[rowId],
          topics: newTemporaryClassTopics
        }
      };

      this.setState({
        isDragging: true,
        tempClassInstances: newTempClassInstances
      });
    },
    100
  );

  updateClassInstance = (classId: string, topics: TopicElementsType[]) => {
    // Actually: props.updateClassInstances(new State);
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
    const { topicTemplates } = this.props;
    const classInstances = this.state.isDragging
      ? this.state.tempClassInstances
      : this.state.classInstances;
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
              onElementDidNotDrop={this.resetDragState}
              onElementDidDrop={this.commitCurrentDragState}
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
              onElementDidNotDrop={this.resetDragState}
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
