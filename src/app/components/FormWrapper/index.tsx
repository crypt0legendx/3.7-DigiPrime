import * as React from 'react';
import {css} from '@emotion/react';

interface IProps {
  width?:string;
}
export const FormWrapper : React.FC<IProps> = (props) => {
  return(
    <div className="form-holder" css={css`
      width:${props.width ? props.width : '80%'};
      margin: 30px auto;
    `}>
      {props.children}
    </div>
  );
};
