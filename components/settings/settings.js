import React,{useState} from 'react';
import {View,Text,Switch, Touchable, TouchableOpacity,} from 'react-native';
import styles from '../../styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default Settings = ({navigation}) =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(()=>{
        if (isEnabled===true)   {return false;}     else    {return true}}
    );
    console.log(isEnabled)
    return (
     
        <View style={styles.container}>
          <View style={styles.ButtonContainer}>
          <TouchableOpacity onPress={()=>{navigation.navigate("Licence")}} style={styles.settingButton}><Text style={styles.settingText}><MaterialCommunityIcons name="license" size={24} color="black" />Licence of Use</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("DoneTasks")}} style={styles.settingButton}><Text style={styles.settingText}><Ionicons name="md-trash-sharp" size={24} color="black" /> Done Tasks</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("OldGrocery")}} style={styles.settingButton}><Text style={styles.settingText}><Ionicons name="md-trash-sharp" size={24} color="black" /> Old Grocery List</Text></TouchableOpacity>

        <Text  style={styles.settingButton}>To remove an item from the Tasks or the Groceries just Long Press the item.
                In simple words keep your finger for 2 seconds on the item and it will be moved to the trash of its category</Text>
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


        </View>
     
    )
}

