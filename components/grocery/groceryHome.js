import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Grocery from './grocery'
import AddGrocery from './addGrocery'
const Stack = createStackNavigator();
export default function GroceryHome({navigation}){

    return(
        <Stack.Navigator>
        <Stack.Screen
          name="Grocery"
          component={Grocery}
            />
        <Stack.Screen
          name="AddGrocery"
          component={AddGrocery}
        />
      </Stack.Navigator>


    )
}