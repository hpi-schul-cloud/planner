import {
  GeneralStylesType,
  BaseComponentsStylesDefaultType
} from "./stylesType";

export const defaultGeneralStyle: GeneralStylesType = {
  "font-family": "Helvetica, Arial",
  primaryColor: "#489648",
  secondaryColor: "#5db75d",
  textColor: "#555",
  strongerTextColor: "#222",
  lighterTextColor: "#777"
};

export const defaultBaseComponentsStyle: BaseComponentsStylesDefaultType = {
  button: generalStyle => `
    cursor: pointer;
    border-bottom: 2px solid ${generalStyle.primaryColor};
    border-left: 2px solid ${generalStyle.primaryColor};
    border-top: 2px solid #5db75d;
    border-right: 2px solid #5db75d;
    border-radius: 3px;
    padding: 6px 18px;
    color: ${generalStyle.primaryColor};
    font-family: ${generalStyle["font-family"]};
    font-size: 16px;`,
  input: generalStyle => `
    border: none;
    border-bottom: 1px solid ${generalStyle.secondaryColor};
    padding: 7px 10px;
    font-size: 15px;
    font-family: ${generalStyle["font-family"]};
    color: ${generalStyle.textColor};
  `,
  textarea: generalStyle => `
    height: 100px;
    max-width: 800px;
    font-family: ${generalStyle["font-family"]};
    color: ${generalStyle.textColor};
    resize: none;
    font-size: 14px;
    padding: 10px;
    border: ${`1px solid ${generalStyle.secondaryColor}`};
    border-right: none;
    border-bottom: none;
  `,
  select: generalStyle => `
    font-family: ${generalStyle["font-family"]};
    color: ${generalStyle.textColor};
    border-radius: 3px;
    font-size: 15px;
    background: white;
    padding: 7px 10px;
    border: ${`1px solid ${generalStyle.secondaryColor}`};
  `,
  label: generalStyle => `
    display: inline-block;
    padding-right: 5px;
    padding-bottom: 4px;
    font-family: ${generalStyle["font-family"]};
    font-size: 12px;
    font-weight: 300;
    color: ${generalStyle.lighterTextColor};
  `
};
