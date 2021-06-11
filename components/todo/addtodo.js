import React,{useState,useRef,useEffect} from 'react';
import { KeyboardAvoidingView,TextInput,Text,View,TouchableOpacity,Keyboard,ScrollView } from "react-native";
import * as SQLite from "expo-sqlite";
import styles from '../../styles/styles'
import Task from '../task'
const db = SQLite.openDatabase("db.db");
export default function AddTodo({navigation}) {
  const textInput = useRef()
  const [newTask,addnewTask] = useState('');  
  const [DoneTasks,setDoneTasks]=useState([]);

  useEffect(()=>{

    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      // Do something
      getDoneTasks()
    });

    return unsubscribe;
  },[navigation])


  const getDoneTasks=()=>{
    db.transaction(tx => {
      // sending 4 arguments in executeSql
      tx.executeSql('SELECT * FROM tasks where done=?', [1], // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => setDoneTasks(_array) ,
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log('Error ', error)
        ) // end executeSQL
    }) // end transaction
  }

  const handleAddTask = async ()=>{ 
    
    db.transaction(
     (tx) => {
       tx.executeSql("insert into tasks (done, value) values (0, ?)", [newTask])},
       (txObj, error) => console.log('Error ', error)
 
     
   );
   addnewTask('');
   Keyboard.dismiss();
   textInput.current.setNativeProps({text:""})
navigation.navigate("Tasks")
   }

   const updateTask = (id) => {
    console.log("updating task: ",id)
    
        db.transaction(tx => {
          tx.executeSql('update tasks set done = 0 where id = ?', [id],
            (txObj, resultSet) => {
              if (resultSet.rowsAffected > 0) {
       
              }
            })
        })
    
        navigation.navigate("Tasks")
      }
    return (
        <View style={styles.container}>
     
              
                <ScrollView style={styles.scroll}>
                {DoneTasks.map((task,index)=>{

              return <Task text={task.value} key={task.id} action={()=>{return updateTask(task.id)}}/>
              })}


              </ScrollView>
                            
              <KeyboardAvoidingView     behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={styles.WritingRow}>

                    <TextInput style={styles.textInput} placeholder='Add New Task' onChangeText={(text)=>addnewTask(text)} ref={textInput} />

                    <TouchableOpacity onPress={()=>handleAddTask()} style={styles.addWrapper}>
                    <View ><Text style={styles.addText}>+</Text></View>
                    
              </TouchableOpacity>

              </KeyboardAvoidingView>
  </View>
    )
}