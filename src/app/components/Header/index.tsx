import './index.scss';
import history from '../../history';
import * as React from 'react';

export const Header = () => {
  return(
    <div className="header text-center">
      <div className="logo">
        <a onClick={() => history.push('/')}>
          <img src={'static/assets/img/logo.png'}/>
        </a>
        <p>T3.7 Identification of cross-regional value-chains <br/> through open innovation</p>
      </div>
    </div>
  );
};
