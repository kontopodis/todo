import React,{useState} from 'react'
import {View,Text,Switch} from 'react-native'
import styles from '../styles/styles'
import { AntDesign } from '@expo/vector-icons';
export default House = () =>{

    
    return (
     
        <View style={styles.container}>
            <Text style={styles.title}>Notes</Text>
            <Text>Εδω λεω να το κανουμε σημειοματαριο</Text>
            <Text>Σε φιλώ γλυκά </Text>
            <AntDesign name="heart" size={24} color="red" />
        </View>
     
    )
}

