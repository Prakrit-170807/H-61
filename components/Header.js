import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <View styles = {styles.main}>
          <Text style = {styles.displayText}>Learn Debugging </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  main:{
    width: 50,
    color: "#222222",
    marginTop:10,
  },
  displayText:{
    height:80,
    paddingTop:40, 
    paddingBottom:50,
    paddingLeft:20,
    backgroundColor: "#242423",
    color: '#0353a4',
    textAlign: 'left',
    fontSize: 30,
  }
})