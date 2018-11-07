import { Component } from 'react';
declare type PropsType = {
    caption: string;
    competences: {
        id: string;
        level: string;
        text: string;
    }[];
    onChange: (competences: {
        id: string;
        level: string;
        text: string;
    }[]) => void;
};
declare class CompetenceChips extends Component<PropsType> {
    deleteCompetence: (index: number) => void;
    addCompetence: () => void;
    render(): JSX.Element;
}
export default CompetenceChips;
