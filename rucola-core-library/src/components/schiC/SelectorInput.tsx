import React, { Component } from "react";
import times from "lodash/times";

interface PropsType {
  options: string[];
  values: Object[];
}

interface StateType {
  addedFieldCount: number;
}

class SelectorInput extends Component<PropsType, StateType> {
  static defaultProps: PropsType = {
    options: [],
    values: []
  };
  state = {
    addedFieldCount: 0
  };
  addField = () => {
    this.setState({
      addedFieldCount: this.state.addedFieldCount + 1
    });
  };

  render() {
    const { options, values } = this.props;
    return (
      <div>
        {times(this.state.addedFieldCount, () => (
          <div>
            <select>{options.map(option => <option>{option}</option>)}</select>
            <input />
          </div>
        ))}
        <button onClick={this.addField}>+</button>
      </div>
    );
  }
}

export default SelectorInput;
