import * as React from 'react';
import {API_BASE_URL} from 'settings';
import { notify } from 'react-notify-toast';

interface IContextProps {
  smartSpecializationData:any;
  setSmartSpecializationData(smartSpecializationData:any):void;
  addSmartSpecialization:Function;
}

export const SmartSpecializationContext = React.createContext({} as IContextProps);

export const SmartSpecializationProvider = ({children}) => {
  const [smartSpecializationData,setSmartSpecializationData] = React.useState({});

  const fetchSmartSpecialization = async () => {
    const fetchSSData = await fetch(
      `${API_BASE_URL}smartSpecializations`,{
        method: 'GET',
      },
    );
    if (fetchSSData.status === 200) {
      const jsonData = await fetchSSData.json();
      setSmartSpecializationData(jsonData['_embedded']['smartSpecializations']);
    } else {
      notify.show(
        'Error data. Please try again or contact your administrator.',
        'error',
      );
    }
  };

  const addSmartSpecialization = async (info) =>{
    const body = {
      dateOfSource: '2021-05-24T07:22:54.607Z',
      economicsDomains: info.economicsDomains,
      policyObjectives: info.policyObjectives,
      scientificDomain: info.scientificDomain,
      smartSpecializationDescr: info.scientificDomain,
      smartSpecializationId: 0,
      source: info.source,
    };
    const response = await fetch(`${API_BASE_URL}smartSpecializations`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' } },
    );
    console.log(response);
  };

  React.useEffect(() => {
    fetchSmartSpecialization();
  },              []);
  const defaultContext = {
    smartSpecializationData,
    addSmartSpecialization,
  };
  return(
    <SmartSpecializationContext.Provider value={defaultContext}>
      {children}
    </SmartSpecializationContext.Provider>
  );
};
