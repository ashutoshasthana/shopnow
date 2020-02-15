import React from 'react';
import { TextInput,Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    View,
    Text,
    Image,    
    StyleSheet
} from 'react-native';

const Login = () => {
    return (       
    <View  style={[styles.container]}>
       <View style={[styles.imageContainer]}>
           <Image 
            style={[styles.image]}
            source={require('../assets/shopify-bag.png')}/>            
       </View>
         <View style={[styles.buttonContainer]}> 
           <View style={[{flex:1,width:'90%'}]}>                
                <TextInput mode='outlined'
                  style={[styles.inputText]}               
                  label="Email or Username"/> 
               
                <TextInput 
                   mode='outlined'
                   label="Password" 
                  style={[styles.inputText]}/>    
              
              <Button 
               mode="contained"
               style={[{minHeight:'15%',alignContent:'center',justifyContent:'center',marginTop:'2%'}]}               
               onPress={() => console.log('Pressed')}>
                Login
              </Button>
        </View>
       </View>
     </View>    
    );
  };
  
  const styles = StyleSheet.create({
   container : {
          flex:1,
          justifyContent: 'center',  
          backgroundColor:'red',          
          flexDirection:'column',        
       },
   imageContainer: {     
       justifyContent:'center',
       alignItems:'center',       
       borderRadius:5
     },   
   buttonContainer : {   
    flexDirection:'column',
    alignItems:'center',     
   },
   image: {  
   },
   inputText : {    
       borderRadius:10
       }
  });
  
  export default Login;