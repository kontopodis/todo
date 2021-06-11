import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,ScrollView} from 'react-native';
import Task from '../task'
import * as SQLite from "expo-sqlite";
import styles from '../../styles/styles'
const db = SQLite.openDatabase("db.db");

export default Grocery = ({navigation}) =>{

  const [Groceries,setGroceries]=useState([]);
  const [Keys,setKeys]=useState([]);
  
  const [firstLoad, setFirstLoad] = useState(false);


useEffect(()=>{      
 if(firstLoad === false){
   setFirstLoad(true);
   db.transaction((tx) => {
    //statement
    console.log("creating the table")
     tx.executeSql(  "create table if not exists grocery (id integer primary key not null, done int, value text,count int);"   ),
     [] },
     //db results
     (tx,err)=>{
       console.log("error creating the table")
      console.log(tx)
      console.log(err)
      },(tx,rs)=>{
        console.log("Table created")
        getGroceries()
      });
  }

  },[firstLoad])

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      // Do something
      getGroceries()
    });
  
    return unsubscribe;
  }),[navigation]

const getGroceries=()=>{
  db.transaction(tx => {
    // sending 4 arguments in executeSql
    tx.executeSql('SELECT * FROM grocery where done=?', [0], // passing sql query and parameters:null
      // success callback which sends two things Transaction object and ResultSet Object
      (txObj, { rows: { _array } }) => setGroceries(_array) ,
      // failure callback which sends two things Transaction object and Error
      (txObj, error) => console.log('Error ', error)
      ) // end executeSQL
  }) // end transaction
}
   



  const updateGroceries = (id) => {
console.log("updating grocery: ",id)

    db.transaction(tx => {
      tx.executeSql('update grocery set done = 1 where id = ?', [id],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
    
          }
        })
    })
    getGroceries()
  }

  return (
    //Container
    <View style={styles.container}>
    {

      //Printing Tasks
    }
         <ScrollView style={styles.scroll}>
              {Groceries.map((task,index)=>{
               return <Task text={task.value} key={task.id} action={()=>{return updateGroceries(task.id)}}/>
                })}
          </ScrollView>
          <TouchableOpacity onPress={()=>{navigation.navigate("AddGrocery")}} style={styles.addButton}>
 <View ><Text style={styles.addText}>+</Text></View>
</TouchableOpacity>
      <StatusBar style="auto" />
    </View>

    

  );
}

