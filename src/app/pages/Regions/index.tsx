import './index.scss';

import * as React from 'react';
import {Container, Col, Row, FormGroup} from 'reactstrap';
import {Header} from 'components/Header';
import {Button} from 'components/Form/Button';
import { Multiselect } from 'multiselect-react-dropdown';
import history from '../../history';
import {RegionsContext,RegionsContextProvider} from 'context/RegionsContext';

const RegionsPage = () => {
  const { regions, countries, fetchRegions } = React.useContext(RegionsContext);
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState('');

  const goToFocus = ()=> {
    const info = JSON.parse(localStorage.getItem('info') || '{}');
    if(info) {
      info['country'] = selectedCountry;
      info['region'] = selectedRegion;
      localStorage.setItem('info', JSON.stringify(info));
      history.push('sector');
    }
  };

  React.useEffect(()=> {
    if(selectedCountry) {
      fetchRegions(selectedCountry);
    }
  },              [selectedCountry]);

  return(
    <>
      <Header/>
      <Container className="regions">
        <Row>
        <Col sm={12}>
          <h3 className="text-center">Which Region do you represent?</h3>
          <div className="region-select">
            <Multiselect
              options={countries}
              singleSelect
              displayValue="name"
              onSelect={(selectedList, selectedObj)=> setSelectedCountry(selectedObj.name)}
            />
            <Multiselect
              options={regions}
              singleSelect
              displayValue="name"
              onSelect={(selectedList, selectedObj)=> setSelectedRegion(selectedObj.name)}
            />
          </div>
        </Col>
        </Row>
        <FormGroup row className="justify-content-between">
            <Button type={'back'} onClick={() => history.push('/')}>BACK</Button>
            <Button type={'next'} onClick={() => goToFocus()}>NEXT</Button>
        </FormGroup>
      </Container>
    </>
  );
};

export const Regions : React.FC = () => {
  return(
    <RegionsContextProvider>
      <RegionsPage/>
    </RegionsContextProvider>
  );
};
