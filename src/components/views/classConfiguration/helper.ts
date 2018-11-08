import uniqueId from 'lodash/uniqueId';
import { TopicIndexType } from '../../types';

export const getEmptySpaceSize = (
  rasterCount: number,
  topicElements: TopicIndexType[]
) => {
  return topicElements.reduce((emptySpace, topicElement): number => {
    emptySpace =
      emptySpace - (topicElement.endIndex - topicElement.startIndex + 1);

    return emptySpace;
  }, rasterCount);
};

const getElementIndexAtPosition = (
  position: number,
  topicElements: TopicIndexType[]
) => {
  for (let i = 0; i < topicElements.length; i++) {
    const next = i + 1 < topicElements.length ? i + 1 : null;
    if (topicElements[i].endIndex < position) continue;
    else if (
      topicElements[i].startIndex <= position &&
      topicElements[i].endIndex >= position
    )
      return {
        elementIndexAtPosition: i,
        nextElementFromPosition: next
      };
    else if (topicElements[i].startIndex > position) {
      return {
        elementIndexAtPosition: null,
        nextElementFromPosition: i
      };
    }
  }
  return {
    elementIndexAtPosition: null,
    nextElementFromPosition: null
  };
};

export const getClassTopicsAfterInsertion = (
  insertStartIndex: number,
  width: number,
  elementValues: Partial<TopicIndexType>,
  rasterCount: number,
  currentClassInstances: TopicIndexType[]
) => {
  let result = [...currentClassInstances];
  const {
    elementIndexAtPosition,
    nextElementFromPosition
  } = getElementIndexAtPosition(insertStartIndex, currentClassInstances);
  let actualInsertionPosition = insertStartIndex;
  let actualNextElementIndex = nextElementFromPosition;

  if (elementIndexAtPosition !== null) {
    const { startIndex, endIndex } = currentClassInstances[
      elementIndexAtPosition
    ];
    if ((insertStartIndex - startIndex) / (endIndex - startIndex + 1) < 0.5) {
      actualInsertionPosition = startIndex;
      actualNextElementIndex = elementIndexAtPosition;
    } else {
      actualInsertionPosition = endIndex + 1;
    }
  }

  if (actualNextElementIndex !== null) {
    result = result.slice(0, actualNextElementIndex);
    result.push({
      id: uniqueId('el_'),
      color: '',
      text: '',
      ...elementValues,
      startIndex: actualInsertionPosition,
      endIndex: actualInsertionPosition + width - 1
    });
    let nextInsertionIndex = actualInsertionPosition + width;
    for (
      let i = actualNextElementIndex;
      i < currentClassInstances.length;
      i++
    ) {
      let offset = 0;
      if (nextInsertionIndex > currentClassInstances[i].startIndex) {
        offset = nextInsertionIndex - currentClassInstances[i].startIndex;
      }
      if (currentClassInstances[i].endIndex + offset < rasterCount) {
        result.push({
          ...currentClassInstances[i],
          startIndex: currentClassInstances[i].startIndex + offset,
          endIndex: currentClassInstances[i].endIndex + offset
        });
        nextInsertionIndex = currentClassInstances[i].endIndex + offset + 1;
      } else {
        // Element does not fit -> we abort
        return currentClassInstances;
      }
    }
    // We insert before other elements
  } else {
    // We insert at the end of the row
    if (rasterCount > actualInsertionPosition + width - 1) {
      // New element fits into row
      result.push({
        id: uniqueId('el_'),
        color: '',
        text: '',
        ...elementValues,
        startIndex: actualInsertionPosition,
        endIndex: actualInsertionPosition + width - 1
      });
    }
  }

  return result;
};

export const getClassTopicsAfterMove = (
  insertStartIndex: number,
  elementIndex: number,
  width: number,
  elementValues: Partial<TopicIndexType>,
  rasterCount: number,
  currentClassInstances: TopicIndexType[]
) => {
  let result;
  // Remove moving element from class instances for now
  let temporaryClassInstances = [
    ...currentClassInstances.slice(0, elementIndex),
    ...currentClassInstances.slice(
      elementIndex + 1,
      currentClassInstances.length
    )
  ];
  const {
    elementIndexAtPosition,
    nextElementFromPosition
  } = getElementIndexAtPosition(insertStartIndex, temporaryClassInstances);
  const movingElement = currentClassInstances[elementIndex];

  if (
    insertStartIndex < movingElement.startIndex ||
    (elementIndexAtPosition === null && nextElementFromPosition === null)
  ) {
    /*  
    When the insertion index is smaller than the startIndex or there are
    no elements right from the moving element, it is the same as 
    removing the element and inserting it again 
    */
    result = getClassTopicsAfterInsertion(
      insertStartIndex + width >= rasterCount
        ? rasterCount - width
        : insertStartIndex,
      width,
      elementValues,
      rasterCount,
      temporaryClassInstances
    );
  } else {
    // Let's have a look at the new endIndex
    let actualInsertionEndPosition = insertStartIndex + width - 1;
    const elementPosition = getElementIndexAtPosition(
      actualInsertionEndPosition,
      temporaryClassInstances
    );
    let currentElementIndex = elementPosition.elementIndexAtPosition;
    let nextElementIndex = elementPosition.nextElementFromPosition;

    if (currentElementIndex !== null) {
      const { startIndex, endIndex } = temporaryClassInstances[
        currentElementIndex
      ];
      if (
        (insertStartIndex + width - startIndex) / (endIndex - startIndex + 1) <
        0.5
      ) {
        actualInsertionEndPosition = startIndex - 1;
        nextElementIndex = currentElementIndex;
      } else {
        actualInsertionEndPosition = endIndex;
        nextElementIndex = currentElementIndex + 1;
      }
    } else if (nextElementIndex === null) {
      nextElementIndex = temporaryClassInstances.length;
    }

    // 1) Add unchanged elements
    result = temporaryClassInstances.slice(0, elementIndex);
    // 2) Add elements that are now before movingElement
    for (let i = elementIndex; i < nextElementIndex; i++) {
      result.push({
        ...temporaryClassInstances[i],
        startIndex: temporaryClassInstances[i].startIndex - width,
        endIndex: temporaryClassInstances[i].endIndex - width
      });
    }
    // 3) Add movingElement
    result.push({
      ...movingElement,
      startIndex: actualInsertionEndPosition - width + 1,
      endIndex: actualInsertionEndPosition
    });
    // 4) Add potential elements after movingElement
    result.push(
      ...temporaryClassInstances.slice(
        nextElementIndex,
        temporaryClassInstances.length
      )
    );
  }

  return result;
};

export function memoizeArguments<T extends (...args: any[]) => any>(func: T) {
  let cache = {};
  return (...args: any[]) => {
    const hasChanges = args.reduce((hasChanges, arg, index) => {
      if (arg !== cache[index]) {
        cache[index] = arg;
        return true;
      }
      return hasChanges;
    }, false);
    if (hasChanges) func(...args);
  };
}
