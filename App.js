
import React  from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TodoHome from './components/todo/todoHome'
import  GroceryHome  from './components/grocery/groceryHome'
import SettingsHome from './components/settings/settingsHome'
import { AntDesign } from '@expo/vector-icons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles/styles'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.topgap}></View>
<Tab.Navigator tabBarOptions={{ showIcon: true }}>
  <Tab.Screen name="Todo" component={TodoHome} 
              options = {{
                tabBarIcon: ()=>{ return (<AntDesign name="check" size={24} color="black" />)},
                tabBarLabel:""
              }}                
  />

  <Tab.Screen name="Grocery" component={GroceryHome} 
                options = {{
                  tabBarIcon: ()=>{ return (<AntDesign name="shoppingcart" size={24} color="black" />)},
                  tabBarLabel:""
                }} 
  />
  <Tab.Screen name="Settings" component={SettingsHome}  
                options = {{
                  tabBarIcon: ()=>{ return (<AntDesign name="setting" size={24} color="black" />)},
                  tabBarLabel:""
                }} 
  />

 
</Tab.Navigator>
</NavigationContainer> 

    
  );
}
