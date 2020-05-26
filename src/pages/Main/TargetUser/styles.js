import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
`;

export const StyledBar = styled(StatusBar).attrs({
  backgroundColor: '#000',
})``;

export const Image = styled.Image`
  margin-top: ${Constants.statusBarHeight}px
  width: 100%;
  height: 100%;
  min-height: 400px;
  resizeMode: cover
`;

export const BottomBar = styled.View`
  width: 100%;
  height: 36px;
  position: absolute;
  bottom: 40%;
  margin-bottom: -${Constants.statusBarHeight}px;
  padding-horizontal: 12px;
`;

export const Back = styled(FontAwesome5).attrs({
  name: 'long-arrow-alt-left',
  color: '#fff',
  size: 24,
})``;

export const Filter = styled(LinearGradient).attrs({
  colors: ['rgba(45, 45, 45, 0)', 'rgba(45, 45, 45, 0.6)'],
  start: [0, 0],
  end: [0, 1],
})`
  margin-top: ${Constants.statusBarHeight}px
  width: 100%;
  height: 60%;
  position: absolute
`;

export const Info = styled.View`
  width: 100%;
  padding: 12px;
  margin-top: 4px;
`;

export const Name = styled.Text`
  color: rgba(11, 37, 88, 0.8);
  font-size: 22px;
  line-height: 26px
  font-family: Poppins-bold
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const AlignedRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 20%;
  margin-top: 4px;
`;

export const Age = styled.Text`
  font-weight: bold;
  line-height: 22px;
  font-size: 16px;
  margin-left: 4px;
  letter-spacing: -1px;
  color: rgba(11, 37, 88, 0.6);
`;

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

export const Divider = styled.View`
  border-bottom-color: rgba(11, 37, 88, 0.2);
  border-bottom-width: 1.5px;
  margin-right: 12px;
  margin-vertical: 8px;
`;
