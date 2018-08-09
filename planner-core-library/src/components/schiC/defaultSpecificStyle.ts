import { ComponentStylesDefaultType } from "./stylesType";

export const defaultSpecificStyle: ComponentStylesDefaultType = {
  minusButton: () => `
    padding: 1px 6px;
    border-bottom: 2px solid #964848;
    border-left: 2px solid #964848;
    border-top: 2px solid #b75d5d;
    border-right: 2px solid #b75d5d;
    color: #964848;
  `,
  plusButton: () => `
    padding: 1px 6px;
  `
};
