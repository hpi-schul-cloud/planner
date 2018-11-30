import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import Button from './Button';

type FileType = {
  file: string;
  name: string;
  type: string;
  id: string;
};

interface StateType {
  loadingItems: string[];
}

interface PropsType {
  files: FileType[];
  onFileClick: (file: FileType) => void;
  onFileAdd: (
    {
      file,
      onComplete,
      onError
    }: {
      file: {
        file: File;
        tempId: string;
      };
      onComplete: (file: FileType, tempId: string) => void;
      onError: (tempId: string) => void;
    }
  ) => void;
  onFileRemove: (file: FileType) => void;
  onFormChange: (newFiles: FileType[]) => void;
}

const StyledFileName = styled.div`
  font-family: sans-serif;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  color: #5e5e5e;
  padding: 8px;
  margin-bottom: 5px;
  background: #ffffff;
  border: 1px solid #979797;
  border-radius: 5px;
  &:hover {
    color: #b10438;
  }
`;
const StyledRemove = styled.span`
  font-family: sans-serif;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  color: #5e5e5e;
  &:hover {
    color: #b10438;
  }
`;
const StyledUpload = styled.div`
  margin-top: 10px;
`;

class FileSelector extends Component<PropsType, StateType> {
  ref = createRef<HTMLInputElement>();
  state = {
    loadingItems: []
  };

  onComplete = (file: FileType, tempId: string) => {
    this.props.onFormChange([...this.props.files, file]);
    this.setState({
      loadingItems: [...this.state.loadingItems.filter(item => item !== tempId)]
    });
  };
  onError = (tempId: string) => {
    this.setState({
      loadingItems: [...this.state.loadingItems.filter(item => item !== tempId)]
    });
  };
  onFileAdd = (file: { file: File; tempId: string }) => {
    this.setState({
      loadingItems: [...this.state.loadingItems, file.tempId]
    });
    this.props.onFileAdd({
      file,
      onComplete: this.onComplete,
      onError: this.onError
    });
  };

  handleFileRemove = (file: FileType) => {
    this.props.onFileRemove(file);

    const newFiles = this.props.files.filter(
      existingFile => existingFile.id !== file.id
    );
    this.props.onFormChange(newFiles);
  };

  handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    if (files)
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.onFileAdd({
          file: file,
          tempId: uniqueId('temp_')
        });
      }
    event.target.value = '';
  };

  render() {
    const { files } = this.props;

    return (
      <>
        {files.map(file => (
          <div key={`${file.id}`}>
            <StyledFileName onClick={() => this.props.onFileClick(file)}>
              {file.name}
            </StyledFileName>
            <StyledRemove onClick={() => this.handleFileRemove(file)}>
              Entfernen
            </StyledRemove>
          </div>
        ))}
        {this.state.loadingItems.length > 0 && <div>Upload läuft...</div>}
        <StyledUpload>
          <input
            ref={this.ref}
            style={{ display: 'none' }}
            type="file"
            onChange={this.handleFileInput}
            multiple
          />
          <Button
            caption="Dateien hochladen..."
            onClick={() => (this.ref.current ? this.ref.current.click() : null)}
          />
        </StyledUpload>
      </>
    );
  }
}

export default FileSelector;
