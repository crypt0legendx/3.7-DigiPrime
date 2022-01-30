import './index.scss';

import * as React from 'react';
import {Header} from 'components/Header';
import {Col, Container, FormGroup, Input, Label} from 'reactstrap';
import { Multiselect } from 'multiselect-react-dropdown';
import {FormWrapper} from 'components/FormWrapper';
import {domains} from 'app/appConstants';
import {Button} from 'components/Form/Button';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {AddFocusSectorContextProvider,AddFocusSectorContext} from 'context/AddFocusSectorContext';
import {NaceCodeSelect} from 'components/NaceCodeDropdown';
import history from '../../history';

const SectorPage = () => {
  const [step,setStep] = React.useState(1);
  const {addFocusSector} = React.useContext(AddFocusSectorContext);
  const initialState = {turnover:0,grossValue:0,sectorSource:''};
  const [inputs, setInputs] = React.useState(initialState);
  const [selectedNace, setSelectedNace] = React.useState('');
  const handleSubmit = () => {
    addFocusSector(inputs);
  };
  const goToDash = ()=> {
    const info = JSON.parse(localStorage.getItem('info') || '{}');
    if(info) {
      info['nace'] = selectedNace;
      localStorage.setItem('info', JSON.stringify(info));
      history.push('dashboard');
    }
  };
  return(
    <>
    <Header/>
      <Container className="add-focus-sector">
        <div className="title text-center">
          <h2>Add Focus Sector - {step === 1 ? 'Role in the Regional Economy' : 'Circularity Potential'}</h2>
        </div>
        <AvForm onSubmit={handleSubmit}>
          <FormWrapper>
              <FormGroup row>
                  <Label sm={4}>Nace Code</Label>
                  <Col sm={8}>
                    <NaceCodeSelect onSelect={(selectedList, selectedItem) => setSelectedNace(selectedItem.nace_code)}/>
                  </Col>
              </FormGroup>
              <FormGroup className="d-flex justify-content-between">
                <Button type={'back'} onClick={() => history.push('regions')}>BACK</Button>
                <Button type={'next'} onClick={() => goToDash()}>NEXT</Button>
              </FormGroup>
          </FormWrapper>
        </AvForm>
      </Container>
    </>
  );
};

export const FocusSector = () => {
  return(
    <AddFocusSectorContextProvider>
      <SectorPage/>
    </AddFocusSectorContextProvider>
  );
};
