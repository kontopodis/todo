
import React  from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Todo from './components/todo'
import  Grocery  from './components/grocery'
import Settings from './components/settings'
import Done from './components/done'
import House from './components/house'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles/styles'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.topgap}></View>
<Tab.Navigator tabBarOptions={{ showIcon: true }}>
  <Tab.Screen name="Todo" component={Todo} 
              options = {{
                tabBarIcon: ()=>{ return (<AntDesign name="check" size={24} color="black" />)},
                tabBarLabel:""
              }}                
  />

  <Tab.Screen name="Grocery" component={Grocery} 
                options = {{
                  tabBarIcon: ()=>{ return (<AntDesign name="shoppingcart" size={24} color="black" />)},
                  tabBarLabel:""
                }} 
  />
  <Tab.Screen name="House" component={House} 
                options = {{
                  tabBarIcon: ()=>{ return (<MaterialCommunityIcons name="thought-bubble" size={24} color="black" />)},
                  tabBarLabel:""
                }} 
  />
  <Tab.Screen name="Done" component={Done}  
                options = {{
                  tabBarIcon: ()=>{ return (<AntDesign name="filter" size={24} color="black" />)},
                  tabBarLabel:""
                }} 
  />

 
</Tab.Navigator>
</NavigationContainer> 

    
  );
}
