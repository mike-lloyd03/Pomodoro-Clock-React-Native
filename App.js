import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const incDecs = ['Session', 'Break']

//import Beep from './components/Beep';
import Controls from './components/Controls'
import IncDec from './components/IncDec'
import Timer from './components/Timer'

class Clock extends React.Component {
  constructor() {
    super()
    this.state = {
      sessionLength: 25 * 60,
      breakLength: 5 * 60,
      running: false,
      phase: 'Session',
      timeLeft: 25 * 60
    }
    this.handleIncDec = this.handleIncDec.bind(this)
    this.handleControls = this.handleControls.bind(this)
  }
  
  componentDidUpdate (props, prevState) {
    console.log(prevState)
      if (prevState.timeLeft == 0 && prevState.timeLeft != this.state.timeLeft) {
        //Figure out how to play audio here 
        console.log("BEEP!")
        
        switch (prevState.phase) {
          case 'Session':
            this.setState(
              {
                phase: 'Break',
                timeLeft: prevState.breakLength
              }
            ) 
            break
          case 'Break':
            this.setState(
              {
                phase: 'Session',
                timeLeft: prevState.sessionLength
              }
            )
            break
        }
      }
    else if (prevState[prevState.phase.toLowerCase() + 'Length'] != this.state[this.state.phase.toLowerCase() + 'Length'] && !prevState.running ) {
      this.setState({timeLeft: this.state[this.state.phase.toLowerCase() + 'Length']})
    }
  }
  
  handleIncDec(label, direction) {
    this.setState(state => {
      const phaseLength = label.toLowerCase() + 'Length'
      const currentTime = state[label.toLowerCase() + 'Length']
      const newTime = currentTime + (direction == 'inc' ? 60 : -60)
      return {[phaseLength]: newTime <= 0 ? 60 : newTime > 60*60 ? 60*60 : newTime }
      }
    )
    
  }
    
  handleControls(control) {
    switch(control) {
      case 'Start':
        this.setState({running: true })
        this.timer = setInterval(() => this.setState(state => ({timeLeft: state.timeLeft - 1 })), 1000)
        break
        
      case 'Stop':
        clearInterval(this.timer)
        this.setState({running: false})
        break
        
      case 'Reset':
        // document.getElementById('beep').pause()
        // document.getElementById('beep').currentTime = 0
        clearInterval(this.timer)
        this.setState(state => 
          ({
            sessionLength: 25 * 60,
            breakLength: 5 * 60,
            running: false,
            phase: 'Session',
            timeLeft: 25 * 60
          })
        )
    }
    this.setState(state => console.log(state))
  }
  
  render() {
    const incDecComponents = incDecs.map(i => <IncDec key={i} name={i.toLowerCase()} length={this.state[i.toLowerCase() + 'Length']} clickHandler={this.handleIncDec} />)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pomodoro Clock</Text>
        <Timer phase={this.state.phase} timeLeft={this.state.timeLeft} />
        {incDecComponents}
        <Controls running={this.state.running} clickHandler={this.handleControls} />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 36,
    textAlign: 'center'
  },
});

export default Clock