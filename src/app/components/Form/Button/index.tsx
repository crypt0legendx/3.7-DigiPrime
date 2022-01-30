import * as React from 'react';
import { colors } from '../../../utils/colors-util';
import { InterpolationWithTheme } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight,faArrowCircleLeft} from '@fortawesome/fontawesome-free-solid';
const {
  buttonSecondary,
  buttonDisabled,
  copyStyleBg,
  copyHoverBg,
  white,
  nearTransparent,
  themePrimary,
} = colors;

type ButtonType = 'button' | 'submit' | 'next' | 'back';

export interface IButtonProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: any;
  text?: string;
  title?: string;
  type?: ButtonType;
  isDisabled?: boolean;
  isCopy?: boolean;
  iconImg?:any;
  isLarge?: any;
  onClick?(e: React.SyntheticEvent<HTMLButtonElement>): void;
  style?: React.CSSProperties;
  dataAttributes?: any;
  noMargin?: boolean;
}

export const Button : React.FC<IButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => {

  const onDefaultClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const {
    className,
    title,
    isDisabled,
    type,
    isCopy,
    onClick,
    style,
    dataAttributes,
  } = props;

  const copyStyle = isCopy ? {
    boxShadow: `0 3px 6px 0 ${nearTransparent}`,
    alignContent: 'center',
    backgroundColor: copyStyleBg,
    fontSize: 12,
    height: 32,
    padding: '0 10',
    width: 76,
    '&:hover': {
      backgroundColor: copyHoverBg,
    },
  } : {};

  return (
    <>
      <button
        type={type}
        title={title}
        disabled={isDisabled}
        onClick={onClick ? onClick : onDefaultClick}
        className={className || ''}
        style={{...copyStyle, ...style}}
        {...dataAttributes}
        css={buttonStyles(props)}
      >
        {(type !== 'next' && type !== 'back') &&
          props.children
        }
        {type === 'next' &&
            <>
            { props.children }
            <FontAwesomeIcon className="ml-2" icon={faArrowCircleRight}/>
            </>
        }
        {type === 'back' &&
          <>

          <FontAwesomeIcon className="mr-2" icon={faArrowCircleLeft}/>
            { props.children }
          </>
        }

      </button>
    </>
  );
};

export function buttonStyles(p: IButtonProps) : InterpolationWithTheme<any> {
  const {  isDisabled, isLarge, noMargin } = p;
  const obj : InterpolationWithTheme<any> = {
    backgroundColor: '#FFF',
    border: '1px solid #000000',
    borderRadius: '10px',
    padding: '7px 15px',
    color: '#000',
    minWidth:'141px',
    height:'45px',
    fontSize:  16,
    margin: noMargin? 0 : '12px 0',
    transition: 'filter 500ms',
    fontWeight: 600,
    textAlign: 'center',
    cursor: isDisabled ? 'not-allowed !important': 'pointer',
    filter: isDisabled ? 'none' : 'auto',
    opacity: isDisabled ? 0.5 : 1,
    outline: 'none',
    '&:hover, &:focus': {
      backgroundColor: themePrimary,
      border:`1px solid ${themePrimary}`,
      filter: 'brightness(115%)',
      outline: 'none',
      color:'#fff',
    },
    '&:active': {
      backgroundColor: themePrimary,
      filter: 'brightness(85%)',
    },
  };
  return obj;
}
