var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import uniqueId from 'lodash/uniqueId';
export var getEmptySpaceSize = function (rasterCount, topicElements) {
    return topicElements.reduce(function (emptySpace, topicElement) {
        emptySpace =
            emptySpace - (topicElement.endIndex - topicElement.startIndex + 1);
        return emptySpace;
    }, rasterCount);
};
var getElementIndexAtPosition = function (position, topicElements) {
    for (var i = 0; i < topicElements.length; i++) {
        var next = i + 1 < topicElements.length ? i + 1 : null;
        if (topicElements[i].endIndex < position)
            continue;
        else if (topicElements[i].startIndex <= position &&
            topicElements[i].endIndex >= position)
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
export var getClassTopicsAfterInsertion = function (insertStartIndex, width, elementValues, rasterCount, currentClassInstances) {
    var result = currentClassInstances.slice();
    var _a = getElementIndexAtPosition(insertStartIndex, currentClassInstances), elementIndexAtPosition = _a.elementIndexAtPosition, nextElementFromPosition = _a.nextElementFromPosition;
    var actualInsertionPosition = insertStartIndex;
    var actualNextElementIndex = nextElementFromPosition;
    if (elementIndexAtPosition !== null) {
        var _b = currentClassInstances[elementIndexAtPosition], startIndex = _b.startIndex, endIndex = _b.endIndex;
        if ((insertStartIndex - startIndex) / (endIndex - startIndex + 1) < 0.5) {
            actualInsertionPosition = startIndex;
            actualNextElementIndex = elementIndexAtPosition;
        }
        else {
            actualInsertionPosition = endIndex + 1;
        }
    }
    if (actualNextElementIndex !== null) {
        result = result.slice(0, actualNextElementIndex);
        result.push(__assign({ id: uniqueId('el_'), color: '', text: '' }, elementValues, { startIndex: actualInsertionPosition, endIndex: actualInsertionPosition + width - 1 }));
        var nextInsertionIndex = actualInsertionPosition + width;
        for (var i = actualNextElementIndex; i < currentClassInstances.length; i++) {
            var offset = 0;
            if (nextInsertionIndex > currentClassInstances[i].startIndex) {
                offset = nextInsertionIndex - currentClassInstances[i].startIndex;
            }
            if (currentClassInstances[i].endIndex + offset < rasterCount) {
                result.push(__assign({}, currentClassInstances[i], { startIndex: currentClassInstances[i].startIndex + offset, endIndex: currentClassInstances[i].endIndex + offset }));
                nextInsertionIndex = currentClassInstances[i].endIndex + offset + 1;
            }
            else {
                return currentClassInstances;
            }
        }
    }
    else {
        if (rasterCount > actualInsertionPosition + width - 1) {
            result.push(__assign({ id: uniqueId('el_'), color: '', text: '' }, elementValues, { startIndex: actualInsertionPosition, endIndex: actualInsertionPosition + width - 1 }));
        }
    }
    return result;
};
export var getClassTopicsAfterMove = function (insertStartIndex, elementIndex, width, elementValues, rasterCount, currentClassInstances) {
    var result;
    var temporaryClassInstances = currentClassInstances.slice(0, elementIndex).concat(currentClassInstances.slice(elementIndex + 1, currentClassInstances.length));
    var _a = getElementIndexAtPosition(insertStartIndex, temporaryClassInstances), elementIndexAtPosition = _a.elementIndexAtPosition, nextElementFromPosition = _a.nextElementFromPosition;
    var movingElement = currentClassInstances[elementIndex];
    if (insertStartIndex < movingElement.startIndex ||
        (elementIndexAtPosition === null && nextElementFromPosition === null)) {
        result = getClassTopicsAfterInsertion(insertStartIndex + width >= rasterCount
            ? rasterCount - width
            : insertStartIndex, width, elementValues, rasterCount, temporaryClassInstances);
    }
    else {
        var actualInsertionEndPosition = insertStartIndex + width - 1;
        var elementPosition = getElementIndexAtPosition(actualInsertionEndPosition, temporaryClassInstances);
        var currentElementIndex = elementPosition.elementIndexAtPosition;
        var nextElementIndex = elementPosition.nextElementFromPosition;
        if (currentElementIndex !== null) {
            var _b = temporaryClassInstances[currentElementIndex], startIndex = _b.startIndex, endIndex = _b.endIndex;
            if ((insertStartIndex + width - startIndex) / (endIndex - startIndex + 1) <
                0.5) {
                actualInsertionEndPosition = startIndex - 1;
                nextElementIndex = currentElementIndex;
            }
            else {
                actualInsertionEndPosition = endIndex;
                nextElementIndex = currentElementIndex + 1;
            }
        }
        else if (nextElementIndex === null) {
            nextElementIndex = temporaryClassInstances.length;
        }
        result = temporaryClassInstances.slice(0, elementIndex);
        for (var i = elementIndex; i < nextElementIndex; i++) {
            result.push(__assign({}, temporaryClassInstances[i], { startIndex: temporaryClassInstances[i].startIndex - width, endIndex: temporaryClassInstances[i].endIndex - width }));
        }
        result.push(__assign({}, movingElement, { startIndex: actualInsertionEndPosition - width + 1, endIndex: actualInsertionEndPosition }));
        result.push.apply(result, temporaryClassInstances.slice(nextElementIndex, temporaryClassInstances.length));
    }
    return result;
};
export function memoizeArguments(func) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var hasChanges = args.reduce(function (hasChanges, arg, index) {
            if (arg !== cache[index]) {
                cache[index] = arg;
                return true;
            }
            return hasChanges;
        }, false);
        if (hasChanges)
            func.apply(void 0, args);
    };
}
//# sourceMappingURL=helper.js.map