export declare type GeneralStylesType = {
    'font-family': string;
    primaryColor: string;
    secondaryColor: string;
    defaultTextColor: string;
    strongTextColor: string;
    lightTextColor: string;
};
declare class GeneralStylesProvider {
    defaultStyles: GeneralStylesType;
    customStyles: {};
    setupCustomStyles(customStyles: Partial<GeneralStylesType>): void;
    readonly styles: {
        'font-family': string;
        primaryColor: string;
        secondaryColor: string;
        defaultTextColor: string;
        strongTextColor: string;
        lightTextColor: string;
    };
}
declare const stylesProvider: GeneralStylesProvider;
export default stylesProvider;
export declare function setupCustomStyles(customStyles: Partial<GeneralStylesType>): void;
