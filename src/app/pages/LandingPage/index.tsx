import './index.scss';

import * as React from 'react';
import {Container, Col, Row, FormGroup} from 'reactstrap';
import {Header} from 'components/Header';
import Select from 'react-select';
import history from '../../history';
import {Button} from 'components/Form/Button';

const LandingPage = () => {

  const [selectedOptions, setSelectedOptions] = React.useState([{value: '', label: ''}]);

  const goToRegion = ()=> {
    const material = JSON.stringify({material: selectedOptions});
    localStorage.setItem('info', material);
    history.push('regions');
  };
  const changeOption = (e) => {
    const val = e.target.value;
    setSelectedOptions([...selectedOptions, {value: val, label: val}]);
  };
  return(
    <>
      <Header/>
      <Container className="regions">
        <Row>
        <Col sm={12}>
          <div className="region-select">
            <h4>Which material or product do you want to track?</h4>
            <Select
              value={selectedOptions.filter(o=> o.value)}
              isMulti
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              noOptionsMessage={() => null}
              onKeyDown={ e => changeOption(e) }
              onChange={e=> setSelectedOptions(e)}
            />
            <h6>Download <a href="https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls" download target="_blank">this</a> excel template and fill it in.</h6>
            <h6>Re-upload the excel file at <a href="./import-regional-companies">this</a> page.</h6>
          </div>
        </Col>
        </Row>
        <FormGroup row className="justify-content-end">
          <div>
            <Button type={'next'} onClick={() => goToRegion()}>NEXT</Button>
          </div>
        </FormGroup>
      </Container>
    </>
  );
};

export const Landing : React.FC = () => {
  return(
      <LandingPage/>
  );
};
