import * as React from 'react';
import {Header} from 'components/Header';
import {Container, Col,Row} from 'reactstrap';
import {API_BASE_URL} from 'settings';

export const GrafanaDashboaard = () => {
  const getSankey = async () => {
    const info = JSON.parse(localStorage.getItem('info') || '{}');
    const sankey = await fetch(`${API_BASE_URL}get_sankey?nation=${info.country}&region=${info.region}&material=${info.nace}&sector=${info.nace}`, {
      method:'GET',
    });
    if(sankey.status === 200) {
      console.log('sankey', sankey);
    }
  };
  React.useEffect(()=> {
    getSankey();
  },              []);
  return(
    <>
     <Header/>
      <Container fluid>
          <Row>
            <Col><iframe width="100%" height="650" src="http://80.211.84.248/digiprime" title="Grafana dashbaord"></iframe></Col>
            <Col><iframe width="100%" height="650" src="http://135.125.235.212:3000/login" title="Grafana dashbaord"></iframe></Col>
          </Row>
      </Container>
    </>
  );
};
