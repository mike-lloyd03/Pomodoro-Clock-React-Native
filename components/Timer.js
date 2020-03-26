import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const convertSecToMinSec = (time) => {
  const minutes = Math.floor(time/60);
  const seconds = Math.floor(time - minutes * 60);
  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

const Timer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.phase}</Text>
      <Text style={styles.timer}>{convertSecToMinSec(props.timeLeft)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 48,
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  timer: {
    fontSize: 60,
    textAlign: 'center'
  }
});

export default Timer
