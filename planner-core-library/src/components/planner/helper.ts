import { TopicElementsType } from './InteractiveRasterRow';

export const getEmptySpaceSize = (
  rasterCount: number,
  topicElements: TopicElementsType[]
) => {
  return topicElements.reduce((emptySpace, topicElement): number => {
    emptySpace =
      emptySpace - (topicElement.endIndex - topicElement.startIndex + 1);

    return emptySpace;
  }, rasterCount);
};
