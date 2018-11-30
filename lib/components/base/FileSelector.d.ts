import React, { Component } from 'react';
declare type FileType = {
    file: string;
    name: string;
    type: string;
    id: string;
};
interface PropsType {
    files: FileType[];
    onFileClick: (file: FileType) => void;
    onFileAdd: ({ file, onComplete, onError }: {
        file: {
            file: File;
            tempId: string;
        };
        onComplete: (file: FileType) => void;
        onError: (fileId: string) => void;
    }) => void;
    onFileRemove: (file: FileType) => void;
    onFormChange: (newFiles: FileType[]) => void;
}
declare class FileSelector extends Component<PropsType> {
    onComplete: (file: FileType) => void;
    onError: (tempId: string) => void;
    onFileAdd: (file: {
        file: File;
        tempId: string;
    }) => void;
    handleFileRemove: (file: FileType) => void;
    handleFileInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default FileSelector;
