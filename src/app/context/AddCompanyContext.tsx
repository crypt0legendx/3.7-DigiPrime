import * as React from 'react';
import {API_BASE_URL} from 'settings';

interface IContextProps {
  pChain:[];
  appDomain:[];
  naceCodes:[];
}

export const AddCompanyContext = React.createContext({} as IContextProps);

export const AddCompanyProvider = ({children}) => {
  const [pChain,setPChain] = React.useState([]);
  const [appDomain,setAppDomain] = React.useState([]);
  const [naceCodes,setNaceCodes] = React.useState([]);

  const getPositionChain = async () => {
    const getPositionChainData = await fetch(`${API_BASE_URL}positionValueChains`,{
      method:'GET',
    });
    if(getPositionChainData.status === 200){
      const jsonData = await getPositionChainData.json();
      console.log(jsonData);
      jsonData['_embedded']['positionValueChains'].map((item) => {
        setPChain(oldArr => [...oldArr,item.positionValueChainDescr]);
      });
    }
  };

  const getNaceCodes = async () => {
    const getNaceCodesData = await fetch(`${API_BASE_URL}naceCodes`,{
      method:'GET',
    });
    if(getNaceCodesData.status === 200){
      const jsonData = await getNaceCodesData.json();
      console.log(jsonData)
      jsonData['_embedded']['naceCodes'].map((item) => {
        setNaceCodes(oldArr => [...oldArr,{id:item.naceCodeId,code:item.naceCodeCode,desc:item.naceCodeDescr}]);
      });
    }
  };
  const getApplicationDomain = async () => {
    const getApplicationDomainData = await fetch(`${API_BASE_URL}applicationDomains`,{
      method:'GET',
    });
    if(getApplicationDomainData.status === 200){
      const jsonData = await getApplicationDomainData.json();
      jsonData['_embedded']['applicationDomains'].map((item) => {
        setAppDomain(oldArr => [...oldArr,item.applicationDomainDescr]);
      });
    }
  };
  React.useEffect(() => {
    getPositionChain();
    getApplicationDomain();
    getNaceCodes();
  },              []);
  const defaultContext = {
    pChain,
    appDomain,
    naceCodes,
  };
  return(
    <AddCompanyContext.Provider value={defaultContext}>
      {children}
    </AddCompanyContext.Provider>
  );
};
