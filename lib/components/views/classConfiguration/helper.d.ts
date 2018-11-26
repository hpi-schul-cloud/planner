import { TopicIndexType } from '../../types';
import { AllClassInstancesType } from './types';
export declare const sortAllTopics: (classInstances: AllClassInstancesType<TopicIndexType>) => AllClassInstancesType<TopicIndexType>;
export declare const getEmptySpaceSize: (rasterCount: number, topicElements: TopicIndexType[]) => number;
export declare const getClassTopicsAfterInsertion: (insertStartIndex: number, width: number, elementValues: Partial<TopicIndexType>, rasterCount: number, currentClassInstances: TopicIndexType[]) => TopicIndexType[];
export declare const getClassTopicsAfterMove: (insertStartIndex: number, elementIndex: number, width: number, elementValues: Partial<TopicIndexType>, rasterCount: number, currentClassInstances: TopicIndexType[]) => TopicIndexType[];
export declare function memoizeArguments<T extends (...args: any[]) => any>(func: T): (...args: any[]) => void;
