import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Beep = (props) => {
  return (
    <audio
      id="beep"
      src="https://www.trekcore.com/audio/computer/computerbeep_7.mp3"
      preload="auto"
    />
  )
}

export default Beep