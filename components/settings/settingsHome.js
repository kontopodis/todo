import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './settings'
import DoneTasks from './doneTasks'
import OldGrocery from './oldGrocery'
import Terms from '../licence/terms'
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
               <Stack.Screen
          name="OldGrocery"
          component={OldGrocery}
        />

        <Stack.Screen
          name="Licence"
          component={Terms}
        />
      </Stack.Navigator>


    )
}