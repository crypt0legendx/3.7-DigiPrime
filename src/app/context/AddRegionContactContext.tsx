import * as React from 'react';
import {API_BASE_URL} from 'settings';
import {RegionsContext} from 'context/RegionsContext';
const axios = require('axios');

interface IContextProps {
  addRegionalContact:Function;
}

export const AddRegionContext = React.createContext({} as IContextProps);

export const AddRegionContextProvider = ({children}) => {

  const addRegionalContact = async (info) => {
    const body = {
      emailAddress: info.emailAddress,
      name: info.name,
      phone: info.phone,
      region: {
        country: {
          countryCode: 'IT',
          countryId: 1,
          countryName: 'Italy',
        },
        regionId: 2,
        regionName: 'Lazio',
      },
      surname: info.surname,
      userAddedNotificationId: 0,
      userType: info.userType,
    };
    // const response = await fetch('https://digiprime-veltha-services.red.extrasys.it/userAddedNotifications', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(body)
    // })
    axios.post(
      'https://digiprime-veltha-services.red.extrasys.it/userAddedNotifications',
      JSON.stringify(body),
      {
        headers: {
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      },
    ).then(response => {
      console.log(response)
    });
    // axios.post({
    //   method:'POST',
    //   url:'https://digiprime-veltha-services.red.extrasys.it/userAddedNotifications',
    //   headers:{},
    //   data:JSON.stringify(body)})
    //   .then((response) => {
    //     console.log(response);
    //   }, (error) => {
    //     console.log(error);
    //   });
    // console.log(response.json())
    // const response = await fetch('https://digiprime-veltha-services.red.extrasys.it/userAddedNotifications', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: { 'Content-Type': 'text/plain','Access-Control-Allow-Origin': '*',
    //   } },
    // );
    // console.log(response);
  };

  const defaultContext = {
    addRegionalContact,
  };
  return (
    <AddRegionContext.Provider value={defaultContext}>
      {children}
    </AddRegionContext.Provider>
  );
};
