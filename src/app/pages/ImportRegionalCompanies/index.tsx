import './index.scss';
import * as React from 'react';
import {Header} from 'components/Header';
import {Container, FormGroup} from 'reactstrap';
import {Button} from 'components/Form/Button';
import { FileDrop } from 'react-file-drop';
import history from 'app/history';

export const ImportRegionalCompanies = () => {
  return(
    <>
      <Header/>
      <Container className="regional-companies">
        <div className="title text-center">
          <h2>Import the list of Regional companies from an excel file</h2>
        </div>
        <div className="text-center">
          <Button className="download-btn">Download Template</Button>
        </div>
        <div className="file-drop-wrap">
        <FileDrop
          onFrameDragEnter={event => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={event => console.log('onFrameDragLeave', event)}
          onFrameDrop={event => console.log('onFrameDrop', event)}
          onDragOver={event => console.log('onDragOver', event)}
          onDragLeave={event => console.log('onDragLeave', event)}
          onDrop={(files, event) => console.log('onDrop!', files, event)}
        >
          <img src={'static/assets/img/uploadtocloud.png'}/>
          <h2>Drag&Drop files here<br/>
            or</h2>
          <Button>Browse Files</Button>
        </FileDrop>
        </div>
        <FormGroup row className="justify-content-between">
          <Button type={'back'} onClick={() => history.push('companies')}>BACK</Button>
          <div>
            <a href="#" className="skip-btn">SKIP</a>
            <Button type={'next'} onClick={() => console.log('clicked')}>NEXT</Button>
          </div>
        </FormGroup>
      </Container>
    </>
  );
};
