import * as React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';

const capitalize = (word) => {return word.charAt(0).toUpperCase() + word.substr(1)}

const IncDec = (props) => {
  return (
    <View>
      <Text style={styles.title}>{capitalize(props.name) + ' Length'}</Text>
      <View style={styles.controlsContainer}>
        <Button
          title="<"
          style={styles.controls}
          onPress={() => props.clickHandler(props.name, 'dec')}
        />
        <Text
          style={styles.controls}>{props.length / 60}
        </Text>
        <Button
          title=">"
          style={styles.controls}
          onPress={() => props.clickHandler(props.name, 'inc')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 24
  },
  controls: {
    fontSize: 48,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
});

export default IncDec
