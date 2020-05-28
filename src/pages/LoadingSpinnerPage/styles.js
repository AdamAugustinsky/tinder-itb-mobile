import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: '#FF4A86',
  size: 'large',
})``;

export const Text = styled.Text`
  color: #2d2d2d;
  font-size: 18px;
  margin-top: 16px;
  text-align: center
`;
