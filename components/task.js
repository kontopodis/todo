
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'

export default function Task(props) {
  console.log(props.text)
  return (
    <TouchableOpacity style={styles.item} onLongPress={props.action}>
        <View style={styles.radio}></View>
        <Text style={styles.text}>{props.text}</Text>
       
    </TouchableOpacity>
  );
}
