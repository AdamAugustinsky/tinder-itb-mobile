import styled from 'styled-components/native';

import { StatusBar } from 'react-native';

import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

export const Image = styled.Image`
  width: 300px
`;

export const Body = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center
`;

export const Container = styled.View`
flex: 1;
align-items: center
padding-top: ${Constants.statusBarHeight}px
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#FF4A86', '#FFA16C'],
  start: [0.15, 0.2],
  end: [1, 0.6],
})`
  width: 100%;
  height: 70%;
  position: absolute
`;

export const StyledBar = styled(StatusBar).attrs({
  backgroundColor: 'rgba(45, 45, 45, 0.3)',
  translucent: true,
})``;

export const Title = styled.Text`
  color: #ffffff;
  font-family: 'Baloo-bold';
  font-size: 36px
`;

export const Subtitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`;
