import React from 'react';
import { Provider as PaperProvider,Text,Appbar} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,  
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import Login from './login/index'

const App: () => React$Node = () => {
  return (   
    <PaperProvider>  
      
      <View style={[styles.container]}>    
        <KeyboardAwareScrollView
         style={{ backgroundColor: '#4c69a5' }}
         resetScrollToCoords={{ x: 0, y: 0 }}
         contentContainerStyle={styles.container}
         scrollEnabled={true}>
         <Login/> 
        </KeyboardAwareScrollView>     
      </View>           
    </PaperProvider>   
  );
};

const styles = StyleSheet.create({
 container : {
   flex:1   
 }
});

export default App;
