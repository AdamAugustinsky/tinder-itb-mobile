import styled from 'styled-components';

export const Background = styled.View`
  background: ${(props) => (props.type === 'like' ? '#2FCBA5' : '#FF4B86')}
  width: 60px;
  height: 60px;
  border-radius: 60px;
  align-items: center
  justify-content: center
`;

export const Dislike = styled.Image`
  width: 24px
  height: 24px
`;

export const Like = styled.Image`
  width: 28px
  height: 24px
`;
