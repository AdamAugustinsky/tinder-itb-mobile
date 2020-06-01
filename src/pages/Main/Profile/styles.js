import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';

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
  padding-top: ${Constants.statusBarHeight + 40}px
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
  color: rgba(11, 37, 88, 0.6);
`;

export const FabColumn = styled.View`
  position: relative;
  bottom: 8%
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
