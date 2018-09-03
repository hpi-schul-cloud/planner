import React, { Component } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import throttle from 'lodash/throttle';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import InteractiveRasterRow, {
  TopicElementsType
} from './InteractiveRasterRow';
import DraggableRasterElement from './dragAndDrop/DraggableRasterElement';
import { TOPIC_TEMPLATE } from './constants';
import {
  getClassTopicsAfterInsertion,
  getClassTopicsAfterMove
} from './helper';

type ClassInstanceType = {
  [classId: string]: {
    id: string;
    name: string;
    topics: TopicElementsType[];
  };
};

interface PropsType {
  updateClassInstances: (classInstaces: ClassInstanceType) => void;
  rasterCount: number;
  rasterSize: number;
  topicTemplates: TopicType[];
  classInstances: ClassInstanceType;
  wrapRasterRows?: (
    children: JSX.Element | JSX.Element[]
  ) => JSX.Element | JSX.Element[];
}

interface TopicType {
  id: string;
  text: string;
  width: number;
  color: string;
}

interface StateType {
  tempClassInstances: {
    [classId: string]: {
      id: string;
      name: string;
      topics: TopicElementsType[];
    };
  };
  isDragging: boolean;
}

const RowContainer = styled.div`
  & > * {
    padding: 5px 0px;
    margin-top: 30px;
    :first-child {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 10px;
    }
  }
`;

@DragDropContext(HTML5Backend)
class InteractiveRasterUnit extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      tempClassInstances: props.classInstances,
      isDragging: false
    };
  }

  resetDragState = () => {
    // Cancel throttling
    this.softRelocateTopicElement.cancel();
    this.softInsertTopicElement.cancel();

    this.setState({
      ...this.state,
      tempClassInstances: this.props.classInstances,
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
    this.props.updateClassInstances(this.state.tempClassInstances);
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
        this.props.rasterCount,
        this.props.classInstances[rowId].topics
      );
      const newTempClassInstances = {
        ...this.props.classInstances,
        [rowId]: {
          ...this.props.classInstances[rowId],
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
        this.props.rasterCount,
        this.props.classInstances[rowId].topics
      );
      const newTempClassInstances = {
        ...this.props.classInstances,
        [rowId]: {
          ...this.props.classInstances[rowId],
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
    const newClassInstances = {
      ...this.props.classInstances,
      [classId]: {
        ...this.props.classInstances[classId],
        topics
      }
    };

    this.props.updateClassInstances(newClassInstances);
  };

  render() {
    const {
      topicTemplates,
      rasterSize,
      rasterCount,
      wrapRasterRows
    } = this.props;
    const classInstances = this.state.isDragging
      ? this.state.tempClassInstances
      : this.props.classInstances;
    return (
      <>
        {wrapRasterRows!(
          <RowContainer>
            {map(classInstances, classInstance => (
              <InteractiveRasterRow
                topicElements={classInstance.topics}
                rasterSize={rasterSize}
                rasterCount={rasterCount}
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
            ))}
          </RowContainer>
        )}
        <div>
          {topicTemplates.map(topicTemplate => (
            <DraggableRasterElement
              id={topicTemplate.id}
              key={topicTemplate.id}
              type={TOPIC_TEMPLATE}
              color={topicTemplate.color}
              isTransparentWhileDragging={false}
              onElementDidNotDrop={this.resetDragState}
              text={topicTemplate.text}
              rasterSize={rasterSize}
              startIndex={0}
              endIndex={topicTemplate.width}
            />
          ))}
        </div>
      </>
    );
  }
  static defaultProps = {
    wrapRasterRows: (children: JSX.Element | JSX.Element[]) => children
  };
}

export default InteractiveRasterUnit;
