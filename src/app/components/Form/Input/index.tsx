import * as React from 'react';
import {css} from '@emotion/react';

type InputType = 'text' | 'email' | 'password' | 'number';

export interface IProps {
  id?:any;
  title?: string;
  type?: InputType;
  placeholder?: string;
  autoFocus?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  name: string;
  value: string | number;
  copyInput?: boolean;
  style? : React.CSSProperties;
  onChange?(id, value): void;
  onKeyPress?(e: React.KeyboardEvent<HTMLInputElement>): void;
  className?: string;
  inputClass?: string;
  maxLength?: number;
  autoComplete?: string;
  copyMessage?: string;
  iconToolTipText?: string;
}

export const Input : React.FC<IProps> = (props) => {
  const {
    autoComplete,
    title,
    type,
    placeholder,
    value,
    onChange,
    onKeyPress,
    isRequired,
    autoFocus,
    isReadOnly,
    name,
    style,
    className,
    inputClass,
    maxLength,
    iconToolTipText,
  } = props;

  const classname = isReadOnly ? 'readonly' : '';
  const titlize = !!title ? 'titlize' : '';
  const textRef = React.useRef(null);

  const onDefaultChange = (e: React.SyntheticEvent<HTMLInputElement>) =>{
    if(onChange){
      const el = e.target as HTMLInputElement;
      onChange(el.name, el.value);
    }
  };

  return (
    <div className="input-box-container" css={css`
        .input-wrapper {
          color: #000};
          display: block;
          position: relative;
        }

        .input-wrapper .title {
          display: block;
          font-size: 12px;
          text-align: left;
        }


        .input-wrapper .input-button.titlize {
          top: 63%;
        }`
      }>
        <div className={`input-wrapper ${className}`} >
          <span className="title">{title}</span>
          <input
            className={`${classname} ${inputClass}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value || ''}
            onChange={onDefaultChange}
            onKeyPress={onKeyPress}
            required={isRequired}
            autoFocus={autoFocus}
            readOnly={isReadOnly}
            ref={textRef}
            style={style}
            maxLength={maxLength}
            autoComplete={autoComplete}
            title={ iconToolTipText }
          />
        </div>
    </div>
  );
};
