import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';

export const Body = styled.SafeAreaView`
  flex: 1;
  margin-top: 10px;
  align-items: center;
  width: 83%;
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
  font-size: 40px
`;

export const FabRow = styled.View`
  position: relative;
  bottom: 8%
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%
`;

export const Text = styled.Text`
  font-family: Poppins-bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #2d2d2d;
  margin-vertical: 12px
`;
