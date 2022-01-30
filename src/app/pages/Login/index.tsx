import './index.scss';
import * as React from 'react';
import { Input, Button } from 'reactstrap';
import axios from 'axios';
import { notify } from 'react-notify-toast';
import history from '../../../app/history';

export const Login = () => {
  const [formInput, setFormInput] = React.useState({username: '', password: ''});
  const handleOnChange = (name, value) => {
    setFormInput({...formInput, [name]: value});
  };
  const handleOnSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://digiprime-mvp.red.extrasys.it/orc/user/login', formInput);
      if(response.status===200) {
        localStorage.setItem('digiObject', JSON.stringify(response.data));
        history.push('/');
      }
    } catch {
      notify.show(
        'incorect username and password',
        'error',
      );
    }
  };

  return(
    <div className="login-page">
      <form onSubmit={handleOnSubmit}>
        <div className="logo">
          <img src={'/static/assets/img/logo.png'} />
        </div>
        <div className="input-fields">
          <Input placeholder="Username or Email" icon="envelope" type="text" onChange={(e)=> { handleOnChange('username', e.target.value); }} />
          <Input placeholder="Password" icon="lock" type="password" onChange={(e)=> { handleOnChange('password', e.target.value); }} />
        </div>
        <div className="login-submit">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};
