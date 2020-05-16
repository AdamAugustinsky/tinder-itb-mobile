import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Button, Text } from './styles';

export default function CardButton({ onPressed = null, text }) {
  return (
    <TouchableOpacity
      onPress={onPressed}
    >
      <Button>
        <Text>
          {text}
        </Text>
      </Button>
    </TouchableOpacity>
  );
}
