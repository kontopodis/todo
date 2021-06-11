import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView} from 'react-native'
import Task from '../task'
import * as SQLite from "expo-sqlite";
import styles from '../../styles/styles'

const db = SQLite.openDatabase("db.db");
export default OldGrocery = ({navigation}) =>{
    const [DoneGrocery,setDoneGrocery]=useState([]);

    useEffect(()=>{

      const unsubscribe = navigation.addListener('focus', () => {
        // Screen was focused
        // Do something
        getDoneGrocery()
      });
  
      return unsubscribe;
    },[navigation])


 

    const getDoneGrocery=()=>{
        db.transaction(tx => {
          // sending 4 arguments in executeSql
          tx.executeSql('SELECT * FROM grocery where done=?', [1], // passing sql query and parameters:null
            // success callback which sends two things Transaction object and ResultSet Object
            (txObj, { rows: { _array } }) => setDoneGrocery(_array) ,
            // failure callback which sends two things Transaction object and Error
            (txObj, error) => console.log('Error ', error)
            ) // end executeSQL
        }) // end transaction
      }

      const removeGrocery = (id) => {
        console.log("removing grocery: ",id)
        
            db.transaction(tx => {
              tx.executeSql('delete from grocery where id = ?', [id],
                (txObj, resultSet) => {
                  if (resultSet.rowsAffected > 0) {
                
                  }
                })
            })
            getDoneGrocery()
          }
    return (
      
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
            {DoneGrocery.map((task,index)=>{

  return <Task text={task.value} key={task.id} action={()=>{return removeGrocery(task.id)}}/>
})}
 </ScrollView>
                    </View>
                   
     
    )
}

