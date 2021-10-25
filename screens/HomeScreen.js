import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component{
  nextScreen(){
    this.props.navigation.navigate('GoScreen');
  }

  render(){
    return(
      <View style = {styles.container}>

      <Header/>
        <View>
          <Text style = {styles.displayText}> Debugging is the most importanat part of programming since every program will always have bugs. One should stay calm and composed while debugging, it will help you to debug better. It is always a good practice to print values or statements in console or comment the sections of your code to identify and fix possible bugs. There are a few bugs in this program..Lets see if you can identify and fix them to go to the next screen using the GO button...All the best..!! </Text>

          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('GoScreen')}>
          <Text style = {styles.buttonText}>Compile         ▶</Text>

          <TouchableOpacity style={{ marginBottom: 7000, color:'#333533'}}>
          </TouchableOpacity>

          </TouchableOpacity>

          
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    marginTop:90,
    paddingTop: 20,
    paddingLeft:20,
    paddingRight:10,
    paddingBottom:900,
    backgroundColor:"#333533",
    color: '#dddddd',
    height:400,
    textAlign: 'left',
    fontSize: 20,
    fontWeight : 'bold'
  },
  button: {
    width:250,
    height: 65,
    marginLeft:16,
    borderColor:'#0353a4',
    borderWidth:5,
    marginTop: -520,
    borderRadius: 20,
  },
  buttonText:{
    paddingLeft:20,
    paddingBottom: 40,
    color: '#dddddd',
    width:240,
    height: 60,
    fontSize: 30,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: 10
  }
})