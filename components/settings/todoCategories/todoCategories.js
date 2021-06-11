import React ,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,ScrollView} from 'react-native';
import Task from '../../task'
import * as SQLite from "expo-sqlite";
import styles from '../../../styles/styles'
const db = SQLite.openDatabase("db.db");

export default TodoCategories = ({navigation}) =>{

    const [Categories,setCategories] = useState([]);
  

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
          // Screen was focused
          // Do something
          getCategories()
         
        });
      
        return unsubscribe;
      }),[navigation]

      const getCategories=()=>{
        db.transaction(tx => {
          // sending 4 arguments in executeSql
          tx.executeSql('SELECT category FROM tasks', // passing sql query and parameters:null
            // success callback which sends two things Transaction object and ResultSet Object
            (txObj, { rows: { _array } }) => setTasks(_array) ,
            // failure callback which sends two things Transaction object and Error
            (txObj, error) => console.log('Error ', error)
            ) // end executeSQL
        }) // end transaction
      }

      return (
        //Container
        <View style={styles.container}>
    
        {
    
          //Printing Tasks
        }
             <ScrollView style={styles.scroll}>
                  {Categories.map((task,index)=>{
                   return <Task text={task.value} key={task.id} action={()=>{return updateTask(task.id)}}/>
                    })}
              </ScrollView>
              <TouchableOpacity onPress={()=>{navigation.navigate("AddTasks")}} style={styles.addButton}>
     <View ><Text style={styles.addText}>+</Text></View>
    </TouchableOpacity>
         
        </View>
    
        
    
      );
    }