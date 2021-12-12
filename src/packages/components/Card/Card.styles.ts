import styled from 'styled-components';
import { ColorTypes } from '../../styles/theme';

type BadgeProps = {
  bg: ColorTypes;
  color: ColorTypes;
}

type ImageProps = {
  width: string;
  height: string;
}

type ButtonProps = {
  bg: ColorTypes;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  width: string;
  height: string;
  margin: string;
  padding: string;
}

export const Badge = styled.div<BadgeProps>`
  display: flex;
  justify-content: 'center';
  align-items: 'center';
  background: ${(props) => props.theme.colors[props.bg]};
  color: ${(props) => props.theme.colors[props.color]};
  border-radius: 0.5px;
  position: absolute;
  width: auto;
  height: 20px;
  padding: 1px 8px 3px 8px;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 13.5px;
  font-weight: 1000;
  ::before{
    content: '•';
    margin-right: 4px;
  }
`;

export const Image = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ButtonAddToCar = styled.button<ButtonProps>`
  background: ${(props) => props.bg};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: 0;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 14px;
  font-weight: 1000;
`;