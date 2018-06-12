import React, { Component, Fragment } from "react";
import styled from "styled-components";
import times from "lodash/times";

const FormElementDiv = styled.div`
  margin-bottom: 10px;
`;

const InlineTextFieldDiv = styled.div`
  display: inline-block;
`;

const LabelDiv = styled.div`
  display: inline-block;
  padding-right: 5px;
`;

export default class SchicView extends Component {
  render() {
    return (
      <React.Fragment>
        <FormElementDiv>
          <InlineTextFieldDiv>
            <LabelDiv>Thema</LabelDiv>
            <input />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <LabelDiv>Kurzbeschreibung</LabelDiv>
            <input />
          </InlineTextFieldDiv>
          <InlineTextFieldDiv>
            <LabelDiv>Anzahl Stunden</LabelDiv>
            <input />
          </InlineTextFieldDiv>
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Kompetenzen vom Lehrplan</LabelDiv>
          <textarea />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Inhalt</LabelDiv>
          <textarea />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Medienbildung</LabelDiv>
          <SelectorInput options={["Präsentieren", "Informieren"]} />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Sprachbildung</LabelDiv>{" "}
          <SelectorInput options={["Option 1", "Option 2"]} />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Fächerübergreigende Bildung</LabelDiv>
          <SelectorInput
            options={["Gender Mainstreaming", "Demokratiebildung"]}
          />
        </FormElementDiv>
        <button onClick={this.props.onSave}>Save</button>
      </React.Fragment>
    );
  }
}

class SelectorInput extends Component {
  defaultProps = {
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
