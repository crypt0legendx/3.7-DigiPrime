import * as React from 'react';
import {AddFocusSector} from 'pages/AddFocusSector';
import {API_BASE_URL} from '../../../settings';

interface IContextProps {
  addFocusSector:Function;
}

export const AddFocusSectorContext = React.createContext({} as IContextProps);

export const AddFocusSectorContextProvider = ({children}) => {

  const addFocusSector = async (info) => {
    const body = {
      grossValue: info.grossValue,
      naceCode: {
        naceCodeCode: '',
        naceCodeDescr: '',
        naceCodeId: 0,
      },
      ncompanies: info.ncompanies,
      nemployee: info.nemployee,
      nwasteGenerated: info.nwasteGenerated,
      nwasteIncinerated: info.nwasteIncinerated,
      nwasteLandfilled: info.nwasteLandfilled,
      nwasteRecycled: info.nwasteRecycled,
      region: {
        country: {
          countryCode: '',
          countryId: 0,
          countryName: '',
        },
        regionId: 0,
        regionName: '',
      },
      sectorId: 0,
      sectorSource: info.sectorSource,
      turnover: info.turnover,
    };

    const response = await fetch(`${API_BASE_URL}userAddedNotifications`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'text/plain','Access-Control-Allow-Origin': '*',
      } },
    );
  };
  const defaultContext = {
    addFocusSector,
  };
  return(
    <AddFocusSectorContext.Provider value={defaultContext}>
      {children}
    </AddFocusSectorContext.Provider>
  );
};
