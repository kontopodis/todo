import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView} from 'react-native'
import Task from '../task'
import * as SQLite from "expo-sqlite";
import styles from '../../styles/styles'

const db = SQLite.openDatabase("db.db");
export default DoneTasks = ({navigation}) =>{
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

      const removeTask = (id) => {
        console.log("removing task: ",id)
        
            db.transaction(tx => {
              tx.executeSql('delete from tasks where id = ?', [id],
                (txObj, resultSet) => {
                  if (resultSet.rowsAffected > 0) {
                
                  }
                })
            })
            getDoneTasks()
          }
    return (
      
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
            {DoneTasks.map((task,index)=>{

  return <Task text={task.value} key={task.id} action={()=>{return removeTask(task.id)}}/>
})}
 </ScrollView>
                    </View>
                   
     
    )
}

