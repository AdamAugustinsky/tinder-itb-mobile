import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Background, Like, Dislike } from './styles';
import X from '../../assets/icons/X/x.png';
import Heart from '../../assets/icons/Heart/heart.png';

export default function FloatingActionButton({ type, onPress }) {
  if (type === 'dislike') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Background type="dislike"><Dislike source={X} /></Background>
      </TouchableOpacity>
    );
  }

  if (type === 'like') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Background type="like">
          <Like source={Heart} />
        </Background>
      </TouchableOpacity>
    );
  }

  throw new Error('INVALID TYPE');
}

FloatingActionButton.propTypes = {
  type: PropTypes.oneOf(['like', 'dislike']).isRequired,
};
