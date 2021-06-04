import React,{useState,useRef} from 'react';
import { KeyboardAvoidingView,TextInput,Text,View,TouchableOpacity,Keyboard } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from '../../styles/styles'
const db = SQLite.openDatabase("db.db");
export default function AddGrocery({navigation}) {
  const textInput = useRef()
  const [newTask,addnewTask] = useState('');


  const handleAddTask = async ()=>{ 
    
    db.transaction(
     (tx) => {
       tx.executeSql("insert into grocery (done, value) values (0, ?)", [newTask])},
       (txObj, error) => console.log('Error ', error)
 
     
   );
   addnewTask('');
   Keyboard.dismiss();
   textInput.current.setNativeProps({text:""})
navigation.navigate("Grocery")
   }
    return (
        
    <KeyboardAvoidingView     behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={styles.WritingRow}>

    <TextInput style={styles.textInput} placeholder='Add New Grocery Item' onChangeText={(text)=>addnewTask(text)} ref={textInput} />

<TouchableOpacity onPress={()=>handleAddTask()} style={styles.addWrapper}>
 <View ><Text style={styles.addText}>+</Text></View>
</TouchableOpacity>

  </KeyboardAvoidingView>
    )
}