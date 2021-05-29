import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect, useRef} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View,TouchableOpacity,ScrollView, Keyboard} from 'react-native';
import Task from './task'
import * as SQLite from "expo-sqlite";
import styles from '../styles/styles'
const db = SQLite.openDatabase("db.db");

export default Todo = () =>{

  const [newTask,addnewTask] = useState('');
  const [Tasks,setTasks]=useState([]);
  const [Keys,setKeys]=useState([]);
  const textInput = useRef()
  const [firstLoad, setFirstLoad] = useState(false);


useEffect(()=>{      
 if(firstLoad === false){
   setFirstLoad(true);
   db.transaction((tx) => {
    //statement
    console.log("creating the table")
     tx.executeSql(  "create table if not exists tasks (id integer primary key not null, done int, value text);"   ),
     [] },
     //db results
     (tx,err)=>{
       console.log("error creating the table")
      console.log(tx)
      console.log(err)
      },(tx,rs)=>{
        console.log("Table created")
        getTasks()
      });
  }
  },[firstLoad])

const getTasks=()=>{
  db.transaction(tx => {
    // sending 4 arguments in executeSql
    tx.executeSql('SELECT * FROM tasks where done=?', [0], // passing sql query and parameters:null
      // success callback which sends two things Transaction object and ResultSet Object
      (txObj, { rows: { _array } }) => setTasks(_array) ,
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
  getTasks()
  addnewTask('');
  Keyboard.dismiss();
  textInput.current.setNativeProps({text:""})
  }

  const updateTask = (id) => {
console.log("updating task: ",id)

    db.transaction(tx => {
      tx.executeSql('update tasks set done = 1 where id = ?', [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
         getTasks()
          }
        })
    })
    getTasks()
  }

  return (
    //Container
    <View style={styles.container}>
    {
      //Head
    }
      <Text style={styles.title}>Tasks</Text>
    {
      //Printing Tasks
    }
         <ScrollView style={styles.scroll}>
              {Tasks.map((task,index)=>{
               return <Task text={task.value} key={task.id} action={()=>{return updateTask(task.id)}}/>
                })}
          </ScrollView>
    {
      //Keyboard
    }
    <KeyboardAvoidingView     behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={styles.WritingRow}>

        <TextInput style={styles.textInput} placeholder='Add New Task' onChangeText={(text)=>addnewTask(text)} ref={textInput} />

   <TouchableOpacity onPress={()=>handleAddTask()} style={styles.addWrapper}>
     <View ><Text style={styles.addText}>+</Text></View>
   </TouchableOpacity>

      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>

    

  );
}

