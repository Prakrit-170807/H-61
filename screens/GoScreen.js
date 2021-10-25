import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

export default class GoScreen extends React.Component{
  render(){
    return(
      <View>
      <Header/>
      <Text style = {styles.text}>
      Congratulations..!!
      You debugged it..
      </Text>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('HomeScreen')}>
      <Text style = {styles.buttonText}>◀ Back to Homescreen</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    marginTop:0,
    paddingTop: 20,
    paddingLeft:15,
    paddingRight:10,
    paddingBottom:900,
    backgroundColor:"#333533",
    color: '#dddddd',
    height:400,
    textAlign: 'left',
    fontSize: 40,
    fontWeight : 'bold'
  },
  button: {
    width:370,
    height: 65,
    marginLeft:10,
    borderColor:'#0353a4',
    borderWidth:5,
    marginTop: -780,
    borderRadius: 20,
  },
  buttonText:{
    paddingLeft:20,
    paddingBottom: 40,
    color: '#dddddd',
    width:400,
    height: 60,
    fontSize: 30,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: 10
  }
})