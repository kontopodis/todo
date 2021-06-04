import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './settings'
import DoneTasks from './doneTasks'
const Stack = createStackNavigator();
export default function GroceryHome({navigation}){

    return(
        <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={Settings}
            />
        <Stack.Screen
          name="DoneTasks"
          component={DoneTasks}
        />
      </Stack.Navigator>


    )
}