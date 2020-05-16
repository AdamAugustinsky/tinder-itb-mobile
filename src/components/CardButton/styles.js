import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient).attrs({
  colors: ['#FF4A86', '#FFA16C'],
  start: [0.15, 0.2],
  end: [1, 0.6],
})`
  width: 200px;
  height: 38px;
  borderRadius: 12px;
  alignItems: center;
  alignContent: center;
  alignSelf: center;
`;

export const Text = styled.Text`
  font-family: Baloo-bold;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;
`;
