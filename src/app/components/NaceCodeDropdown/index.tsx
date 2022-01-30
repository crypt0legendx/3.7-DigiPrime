import * as React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import {API_BASE_URL} from 'settings';

interface IProps {
  onSelect?:Function;
}

export const NaceCodeSelect :React.FC<IProps>= ({onSelect}) => {
  const [naceCodes,setNaceCodes] = React.useState([]);
  const getNaceCodes = async () => {
    const getNaceCodesData = await fetch(`${API_BASE_URL}get_nace`, {
      method:'GET',
    });
    if(getNaceCodesData.status === 200) {
      const jsonData = await getNaceCodesData.json();
      const naceArray = jsonData.map(n=> ({...n, name: `${n.nace_code}, ${n.description}`}));
      setNaceCodes(naceArray);
    }
  };
  React.useEffect(() => {
    getNaceCodes();
  },              []);

  return(
    <Multiselect
      options={naceCodes}
      displayValue="name"
      showCheckbox={true}
      onSelect={onSelect}
    />
  );
};
