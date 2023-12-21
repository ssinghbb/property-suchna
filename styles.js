import { StyleSheet } from "react-native";

const globalStyles=StyleSheet.create({
    flex1:{
        flex:1
    },
    justifyBetween:{
      flexDirection:'row',
      width:'100%',
      alignItems:"center",
      justifyContent:'space-between'
    },
    themeBackground:{
       backgroundColor:'black'
    },
    themeColor:{
        color:'black'
    },
    primaryBackground:{
       backgroundColor:'#FDCB0A'
    },
    primaryColor:{
        color:'#FDCB0A'
    },
    primaryBorder:{
        borderColor:'#FDCB0A'
    },
    secondaryBackground:{
        backgroundColor:'white'
     },
     secondaryColor:{
         color:'white'
     },
     secondaryBorder:{
         borderColor:'white'
     },
    flexRow:{
        flexDirection:'row'
    },

})

export default globalStyles

export const themeStyles={
    primaryColor:'#FDCB0A', //#29D4FF
    secondaryColor:'white',
    themeColor:'black',
    primarySecColor:'#60929c'
}