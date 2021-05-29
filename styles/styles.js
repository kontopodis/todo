import {StyleSheet} from 'react-native'

const Theme = {
  dark: false,
  colors: {
    primary: 'black',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      alignItems:"center",
      borderRadius:25,
     color:"#000",
     fontSize:25,
     fontWeight:"bold",
      padding:10,
      position:'absolute',
      top:0
    },
    WritingRow:{
      position:"absolute",
      bottom:10,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:'space-between',
      width:"100%",
      backgroundColor:"grey",
      padding:3
    },
    textInput:{
      borderRadius:25,
      padding:5,
      width:"80%",
      backgroundColor:"#fff"
  
    },
    addWrapper:{
      justifyContent:"center",
 
      width:60,
      height:40,
      borderRadius:60,
      padding:0,
      backgroundColor:"#fff"
    },
    addText:{
   
      justifyContent:"center",
      alignSelf:"center",
      fontWeight:"bold"
  
    },

    //
    scroll:{
      position:'absolute',
      width:"80%",
      height:"80%",
      top:100
    },
    tab:{
      fontWeight:"bold",
      fontSize:50,
      backgroundColor:"#000"
    },
    nav:{
      fontWeight:"bold",
      fontSize:50,
      backgroundColor:"#000"
    },
    rowView:{
      flex:0
    },
    
    item:{
      borderWidth:1,
      padding:10,
      borderRadius:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    width:'80%',
    marginBottom:20
  },
radio:{
  backgroundColor:'#000',
  width:5,
  height:5,
  borderWidth:1,
  flexDirection:'row',
  flexWrap:'wrap',
  borderRadius:4
  

},
text:{
  marginLeft:15,
},
checkbox:{
width:15,
height:15,
backgroundColor:'#567',
marginLeft:15
},
SettingRow:{

  
  flexDirection:"row",
  alignItems:"center",
  justifyContent:'space-between',
  width:"100%",
  backgroundColor:"grey",
  padding:3
},
topgap:{
height:35
}
  });
  

  export default styles;