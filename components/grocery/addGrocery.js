import React,{useState,useRef,useEffect} from 'react';
import { KeyboardAvoidingView,TextInput,Text,View,TouchableOpacity,Keyboard,ScrollView } from "react-native";
import Task from "../task"
import * as SQLite from "expo-sqlite";
import styles from '../../styles/styles'
const db = SQLite.openDatabase("db.db");
export default function AddGrocery({navigation}) {
  const textInput = useRef()
  const [newGrocery,addnewGrocery] = useState('');
const [oldGroceries,setOldGroceries]=useState([])

useEffect(()=>{
  const unsubscribe = navigation.addListener('focus', () => {
    // Screen was focused
    // Do something
    getOldGroceries()
    console.log("is focused")
  });

  return unsubscribe;
}),[navigation]

  const handleAddGrocery = async ()=>{ 
    
    db.transaction(
     (tx) => {
       tx.executeSql("insert into grocery (done, value) values (0, ?)", [newGrocery])},
       (txObj, error) => console.log('Error ', error)
 
     
   );
   addnewGrocery('');
   Keyboard.dismiss();
   textInput.current.setNativeProps({text:""})
navigation.navigate("Grocery")
   }

   const getOldGroceries=()=>{
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql('SELECT * FROM grocery where done=?', [1], // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => setOldGroceries(_array) ,
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('Error ', error)
        ) // end executeSQL
    }) // end transaction
  }

  const updateOldGroceries = (id) => {
    console.log("updating grocery: ",id)
    
        db.transaction(tx => {
          tx.executeSql('update grocery set done = 0 where id = ?', [id],
            (txObj, resultSet) => {
              if (resultSet.rowsAffected > 0) {
           
              }
            })
        })
        navigation.navigate("Grocery")
      }

    return (
        <View style={styles.container}>
 <ScrollView style={styles.scroll}>
  {oldGroceries.map((task,index)=>{
               return <Task text={task.value} key={task.id} action={()=>{return updateOldGroceries(task.id)}}/>
                })}
                </ScrollView>
    <KeyboardAvoidingView     behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={styles.WritingRow}>

    <TextInput style={styles.textInput} placeholder='Add New Grocery Item' onChangeText={(text)=>addnewGrocery(text)} ref={textInput} />
    
<TouchableOpacity onPress={()=>handleAddGrocery()} style={styles.addWrapper}>
 <View ><Text style={styles.addText}>+</Text></View>
</TouchableOpacity>

  </KeyboardAvoidingView>
 
  </View>
    )
}