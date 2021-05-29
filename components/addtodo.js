import React from 'react';
import { KeyboardAvoidingView,TextInput,Text,TouchableOpacity } from "react-native";
export default function AddTodo(params) {
    return (
        
    <KeyboardAvoidingView     behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={styles.WritingRow}>

    <TextInput style={styles.textInput} placeholder='Add New Task' onChangeText={(text)=>addnewTask(text)} ref={textInput} />

<TouchableOpacity onPress={()=>handleAddTask()} style={styles.addWrapper}>
 <View ><Text style={styles.addText}>+</Text></View>
</TouchableOpacity>

  </KeyboardAvoidingView>
    )
}