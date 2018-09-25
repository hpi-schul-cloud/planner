export type GeneralStylesType = {
  'font-family': string;
  primaryColor: string;
  secondaryColor: string;
  defaultTextColor: string;
  strongTextColor: string;
  lightTextColor: string;
};

class GeneralStylesProvider {
  defaultStyles: GeneralStylesType = {
    'font-family': 'sans-serif',
    primaryColor: '#b10438',
    secondaryColor: '#009688',
    defaultTextColor: '#5e5e5e',
    strongTextColor: '#4a4a4a',
    lightTextColor: '#9a9a9a'
  };
  customStyles: {} = {};

  setupCustomStyles(customStyles: Partial<GeneralStylesType>) {
    this.customStyles = customStyles;
  }

  get styles() {
    return {
      ...this.defaultStyles,
      ...this.customStyles
    };
  }
}

const stylesProvider = new GeneralStylesProvider();

export default stylesProvider;

export function setupCustomStyles(customStyles: Partial<GeneralStylesType>) {
  stylesProvider.setupCustomStyles(customStyles);
}
