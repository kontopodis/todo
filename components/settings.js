import React,{useState} from 'react'
import {View,Text,Switch} from 'react-native'
import styles from '../styles/styles'
import { Ionicons } from '@expo/vector-icons'; 
export default Settings = () =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(()=>{
        if (isEnabled===true)   {return false;}     else    {return true}}
    );
    console.log(isEnabled)
    return (
     
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

       <View styles={styles.item}>
            <Text>Dark Mode</Text>
            <Switch
        trackColor={{ false: "lightgrey", true: "grey" }}
        thumbColor={isEnabled ? "black" : "grey"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

        </View>
     
    )
}

