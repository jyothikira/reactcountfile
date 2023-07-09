import React,{Component} from "react";
import {View,Text,StyleSheet,Button} from "react-native";
interface props{}
interface state{
  counter:any;
}
export default class myApp extends Component<props,state>{
    constructor(props:props){
    super(props);

     this.state={
    counter:0,
     //value:0
  
    };
    }
  incrementCount=()=>{

  this.setState({
    counter:this.state.counter+1
  });

};
DecrementCount=()=>{
    this.setState({
    counter:this.state.counter-1
  });
}
render() {
  return(
    <View style={styles.root}>
      <Text style={styles.text}>Counter:{this.state.counter}</Text>
      
      <Button 
               title="Add"
               onPress={this.incrementCount.bind(this)}
               color='green'
      />   
      <Button 
              title="Delete"
               onPress={this.DecrementCount.bind(this)}
               color='green'
      />   
    
    </View>
         
  )
}
}
const styles=StyleSheet.create({
  root:{
    padding:16,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },
    button:{
      flex:1
    },
    text:{
      fontSize:24
     }
});
