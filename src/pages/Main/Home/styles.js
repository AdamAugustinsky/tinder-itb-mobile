import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight + 20}px;
  align-items: center;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#FF4A86', '#FFA16C'],
  start: [0.15, 0.2],
  end: [1, 1],
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
  align-self: center;
  color: #ffffff;
  font-family: 'Poppins-bold';
  font-size: 36px
`;

export const Info = styled.View`
  width: 300px;
  background-color: #fff;
  padding: 12px;
  padding-bottom: 32px;
  borderBottomLeftRadius: 8px
  borderBottomRightRadius: 8px
`;

export const Name = styled.Text`
  color: rgba(11, 37, 88, 0.8);
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  font-family: Roboto
`;

export const Image = styled.Image`
  width: 300px; 
  maxHeight: 330px;
  height: 100%;
  borderTopLeftRadius: 8px
  borderTopRightRadius: 8px
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Age = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  margin-left: 4px;
  color: rgba(11, 37, 88, 0.6);
`;

export const About = styled(Feather).attrs({
  name: 'info',
  color: '#BDBDBD',
  size: 24,
})``;

export const Group = styled.View`
  flex-direction: row
`;
