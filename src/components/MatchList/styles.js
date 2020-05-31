import styled from 'styled-components/native';
import {
  Feather, Entypo, FontAwesome, AntDesign,
} from '@expo/vector-icons';
import { Dimensions } from 'react-native';


export const Container = styled.View`
  height: 80%; 
`;

export const View = styled.View`
  width: ${Dimensions.get('window').width - 100}px;
  margin-horizontal: 20px
`;

export const Info = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 12px;
  padding-bottom: 24px;
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
  height: 60%;
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

export const FabColumn = styled.View`
  position: relative;
  bottom: 5%
  justify-content: space-between;
  height: 25%
  align-items: center;
  width: 100%;
`;

export const Center = styled.View`
  position: absolute;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
  width: 85%;
  background-color: #fff;
  borderRadius: 16px;
  padding: 20px;
  padding-bottom: 0px;
  shadow-color: #000;
  shadowOpacity: 0.25
  elevation: 5
`;

export const Title = styled.Text`
  font-family: Poppins-bold;
  font-size: 32px;
  color: #2D2D2D;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: rgba(45, 45, 45, 0.7);   
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-vertical: 12px
`;

export const Contacts = styled.Text`
  font-family: Poppins-bold;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.02px;
  color: #2d2d2d;
`;

export const Facebook = styled(Entypo).attrs({
  name: 'facebook',
  size: 32,
  color: '#1976D2',
})``;

export const Whatsapp = styled(FontAwesome).attrs({
  name: 'whatsapp',
  size: 32,
  color: '#4CAF50',
})``;

export const Instagram = styled(AntDesign).attrs({
  name: 'instagram',
  size: 32,
  color: '#CD0079',
})``;

export const Twitter = styled(AntDesign).attrs({
  name: 'twitter',
  size: 32,
  color: '#08BBEE',
})``;
