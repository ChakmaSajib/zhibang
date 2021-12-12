import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  Box,
  Typography,
  Button,
  ListItem,
  withStyles
} from '@material-ui/core';

import UploadFileService from '../Api/services/uploadFileService';
import ButtonPrimaryWarning from './Buttons/ButtonPrimaryWarning';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: '#EEEEEE'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress);

export default class UploadCVToSentHR extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: '',
      isError: false,
      fileInfos: []
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files
    });
  }

  async upload() {
    let currentFile = this.state.selectedFiles[0];
    console.log(`current file, ${currentFile}`);

    this.setState({
      progress: 0,
      currentFile: currentFile
    });

    try {
      const response = await UploadFileService.upload(
        currentFile,
        1,
        (event) => {
          this.setState({
            progress: Math.round((100 * event.loaded) / event.total)
          });
        }
      );
      console.log(response);
      console.log(response.data.msg);

      this.setState({
        message: response.data.msg,
        isError: false
      });
    } catch (error) {
      console.log(`error ${error}`);
      this.setState({
        progress: 0,
        message: 'Could not upload the file!',
        currentFile: undefined,
        isError: true
      });
    }

    this.setState({
      selectedFiles: undefined
    });
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      isError
    } = this.state;

    return (
      <div className='mg20' style={{ width: 500, height: 300 }}>
        {currentFile && (
          <Box className='mb25' display='flex' alignItems='center'>
            <Box width='100%' mr={1}>
              <BorderLinearProgress variant='determinate' value={progress} />
            </Box>
            <Box minWidth={35}>
              <Typography
                variant='body2'
                color='textSecondary'
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        )}

        <label htmlFor='btn-upload'>
          <input
            id='btn-upload'
            name='btn-upload'
            style={{ display: 'none' }}
            type='file'
            onChange={this.selectFile}
          />
          <Typography
            component='h2'
            style={{ marginTop: 20, textAlign: 'center', color: '#1ba94c' }}
          >
            Upload Your CV
          </Typography>
          <Button
            className='btn-choose'
            variant='outlined'
            component='span'
            style={{ marginTop: 20, marginLeft: 20, textAlign: 'center' }}
          >
            Choose Files
          </Button>
        </label>
        <div className='file-name' style={{ marginTop: 20, marginLeft: 20 }}>
          {selectedFiles && selectedFiles.length > 0
            ? selectedFiles[0].name
            : null}
        </div>
        <Button
          className='btn-upload'
          color='primary'
          variant='contained'
          component='span'
          disabled={!selectedFiles}
          onClick={this.upload}
          style={{ marginTop: 20, marginLeft: 20, textAlign: 'center' }}
        >
          Upload
        </Button>

        <Typography
          variant='subtitle2'
          className={`upload-message ${isError ? 'error' : ''}`}
        >
          {message}
        </Typography>
      </div>
    );
  }
}
