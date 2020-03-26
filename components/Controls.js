import * as React from 'react';
import {Button, Text, View, StyleSheet, Image, } from 'react-native';

const Controls = (props) => {
  let buttonText = props.running ? "Stop" : "Start"
  return (
    <View style={styles.container}>
      <Button title={buttonText} onPress={() => props.clickHandler(buttonText)}>
      </Button>
      <Button title="Reset" onPress={() => props.clickHandler('Reset')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 24,
  },
});

export default Controls
