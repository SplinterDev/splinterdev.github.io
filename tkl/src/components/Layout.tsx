import styled from 'styled-components';

type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type FlexProps = {
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  gap?: string;
  p?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
};

const FlexComponent = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || 'stretch'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: ${(props) => props.gap || '0'};
  padding: ${(props) => props.p || '0'};
  padding-top: ${(props) => props.pt || '0'};
  padding-bottom: ${(props) => props.pb || '0'};
  padding-left: ${(props) => props.pl || '0'};
  padding-right: ${(props) => props.pr || '0'};
  margin: ${(props) => props.m || '0'};
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
`;

export const Column = styled(FlexComponent)`
  flex-direction: column;
`;

export const Row = styled(FlexComponent)`
  flex-direction: row;
`;
