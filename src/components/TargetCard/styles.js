import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';


export const Info = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 12px;
  padding-bottom: 32px;
  borderBottomLeftRadius: 8px
  borderBottomRightRadius: 8px
`;

export const Name = styled.Text`
  color: rgba(11, 37, 88, 0.8);
  font-size: 24px;
  line-height: 32px
  font-family: Poppins-bold
`;

export const Image = styled.Image`
  width: 100%;
  maxHeight: 60%;
  height: 100%;
  borderTopLeftRadius: 8px
  borderTopRightRadius: 8px
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 12px;
`;

export const Age = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-left: 4px;
  letter-spacing: -1px;
  color: rgba(11, 37, 88, 0.6);
`;

export const About = styled(Feather).attrs({
  name: 'info',
  color: '#BDBDBD',
  size: 24,
})``;

export const Column = styled.View`
  margin-top: 4px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: Poppins-bold
  line-height: 16px;
  color: rgba(11, 37, 88, 0.8);
`;

export const Value = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-right: 4px
  color: rgba(11, 37, 88, 0.6);
`;
