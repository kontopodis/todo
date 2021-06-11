
import React, { useEffect,useState }  from 'react';
import { View,Modal,Text,TouchableOpacity, Touchable } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Terms from './components/licence/terms'
import MainNavigator from './mainNavigator'

import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles/styles'

const Stack = createStackNavigator();

export default function App({navigation}) {
const [ModalEnabled,setModalEnabled] = useState(true);
useEffect(()=>{
  Check();
})
const getTerms = async ()=>{
  try {
  return await AsyncStorage.getItem('TermsAccepted')
  } catch (e) {
    console.log(e)
  }

  
}   

const Check=()=>{
  getTerms().then((term)=>{
    if (term==="true"){
      console.log("Terms have been accepted")
      setModalEnabled(false)
    }else{
      console.log("Accept the terms please")
      setModalEnabled(true)
    }
    
  })
}

const AcceptTerms = async () => {
  console.log("Accepted")
  try {
    await AsyncStorage.setItem('TermsAccepted', "true")
    } catch (e) {
    console.log(e)
  }
  setModalEnabled(false);

  
  
}

const TermsModal=()=>{
  if (ModalEnabled === true){
    return (
    <Modal>
      <Terms/>
      <TouchableOpacity onPress={AcceptTerms} >
        <Text style={styles.termsButton}> Accept</Text>
        <Text style={styles.termsButton}>Terms & Conditions</Text>
      </TouchableOpacity>
    </Modal>
    ) 
  }
  else {return  <View style={styles.topgap}/>}
}
   return(
    <NavigationContainer>    
      <TermsModal />
<MainNavigator/>
      
  </NavigationContainer> 
)
}

