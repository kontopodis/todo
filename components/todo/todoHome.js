import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './todo';
import AddTodo from './addtodo';
import Terms from '../licence/terms';
const Stack = createStackNavigator();
export default function TodoHome({navigation}){

    return(
    <Stack.Navigator>
        <Stack.Screen name="Tasks" component={Todo}/>
        <Stack.Screen name="AddTasks" component={AddTodo}/>
        <Stack.Screen name="Terms" component={Terms}/>
    </Stack.Navigator>


    )
}