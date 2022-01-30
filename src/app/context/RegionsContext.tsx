import * as React from 'react';
import {API_BASE_URL} from 'settings';
import { notify } from 'react-notify-toast';

interface IContextProps {
  regions:[];
  setRegions(regions:any):void;
  countries:[];
  setCountries(countries:any):void;
  fetchRegions: Function;
}

export const RegionsContext = React.createContext({} as IContextProps);

export const RegionsContextProvider =  ({ children }) => {
  const [regions,setRegions] = React.useState([]);
  const [countries,setCountries] = React.useState([]);

  const fetchRegions = async (country) => {
    const fetchRegionsData = await fetch(
      `${API_BASE_URL}get_regions?nation= ${country}`,{
        method: 'GET',
      },
    );
    if (fetchRegionsData.status === 200) {
      const jsonData = await fetchRegionsData.json();
      const regionArray = jsonData.map(c=> ({name: c.region, id: c.region}));
      setRegions(regionArray);
    } else {
      notify.show(
        'Error data. Please try again or contact your administrator.',
        'error',
      );
    }
  };

  const fetchCountries = async () => {
    const fetchCountriesData = await fetch(
      `${API_BASE_URL}get_nations`,{
        method: 'GET',
      },
    );
    if (fetchCountriesData.status === 200) {
      const jsonData = await fetchCountriesData.json();
      const countryArray = jsonData.map(c=> ({name: c.nation, id: c.nation}));
      setCountries(countryArray);
    } else {
      notify.show(
        'Error data. Please try again or contact your administrator.',
        'error',
      );
    }
  };

  React.useEffect(() => {
    fetchCountries();
  },              []);
  const defaultContext = {
    regions,
    countries,
    fetchRegions,
  };

  return (
    <RegionsContext.Provider value={defaultContext}>
      {children}
    </RegionsContext.Provider>
  );
};
