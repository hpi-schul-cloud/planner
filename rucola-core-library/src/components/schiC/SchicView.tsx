import React, { Component } from "react";
import styled from "styled-components";
import SelectorInput from "./SelectorInput";

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

interface PropsType {
  onSave: () => void;
}

export default class SchicView extends Component<PropsType> {
  render() {
    return (
      <>
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
          <SelectorInput
            options={["Präsentieren", "Informieren"]}
            values={[]}
          />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Sprachbildung</LabelDiv>{" "}
          <SelectorInput options={["Option 1", "Option 2"]} values={[]} />
        </FormElementDiv>
        <FormElementDiv>
          <LabelDiv>Fächerübergreigende Bildung</LabelDiv>
          <SelectorInput
            options={["Gender Mainstreaming", "Demokratiebildung"]}
            values={[]}
          />
        </FormElementDiv>
        <button onClick={this.props.onSave}>Save</button>
      </>
    );
  }
}
