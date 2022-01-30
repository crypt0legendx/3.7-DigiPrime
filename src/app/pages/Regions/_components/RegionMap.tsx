import * as React from 'react';

const jQuery = require('jquery');
const $ = jQuery;
window.jQuery = jQuery;
require('jvectormap');
require('../lib/maps/europe_merc');

export const RegionMap = () => {
  const [region,setRegion] = React.useState('Lazio');
  const drawMap = () => {
    $('#world-map').vectorMap({
      map: 'europe_merc',
      backgroundColor: '#c3e6fb',
      markerStyle: {
        initial: {
          fill: '#fff',
        },
        selected: {
          fill: '#CA0020',
        },
      },
      regionStyle: {
        initial: {
          fill: '#FFF',
        },
        selected: {
          fill: '#F4A582',
        },
      },
      onRegionLabelShow(e, el, code){
        e.preventDefault();
      },
      onRegionTipShow(e, el, code){
        setRegion(el.html());
      },
    });
  };
  React.useEffect(() => {
    drawMap();
  },              []);
  return (
    <div className="map-holder">
    <div className="map-container">
      <div id="world-map" className="jvmap-smart"></div>
    </div>
      <p>You've selected "{region}" Region</p>
    </div>
  );
};
