import styled from 'styled-components';
import { ColorTypes } from '../theme';

type ContainerProps = {
  bg: ColorTypes;
  width: string;
  height: string;
  margin: string;
  padding: string;
};

type FlexProps = {
  bg: ColorTypes;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  width: string;
  height: string;
  margin: string;
  padding: string;
  border: string;
};

type TextProps = {
  color: ColorTypes;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors[props.bg]};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Flex = styled.div<FlexProps>`
  background: ${(props) => props.theme.colors[props.bg]};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
`;

export const Title = styled.h1<TextProps>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.fonts.main};
`

export const Paragraph = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.fonts.main};
`;