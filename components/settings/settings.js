import React,{useState} from 'react'
import {View,Text,Switch, Touchable, TouchableOpacity,} from 'react-native'
import styles from '../../styles/styles'

import { AntDesign } from '@expo/vector-icons'; 
export default Settings = ({navigation}) =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(()=>{
        if (isEnabled===true)   {return false;}     else    {return true}}
    );
    console.log(isEnabled)
    return (
     
        <View style={styles.container}>
            <Text >To remove an item from the Tasks or the Groceries just Long Press the item.
                In simple words keep your finger for 2 seconds on the item and it will be moved to the trash of its category</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("DoneTasks")}}><Text style={styles.settingButton}>Done Tasks</Text></TouchableOpacity>
       <View styles={styles.item}>
            <Text>Dark Mode(not working yet)</Text>
            <Switch
        trackColor={{ false: "lightgrey", true: "grey" }}
        thumbColor={isEnabled ? "black" : "grey"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

<Text>Κι εγω σε λατρευω </Text>
            <AntDesign name="heart" size={24} color="red" />
      </View>


        </View>
     
    )
}

