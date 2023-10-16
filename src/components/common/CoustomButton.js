import { Pressable, Text ,StyleSheet} from "react-native";



const CoustomButton =({title})=>{
    return(
        <Pressable style={style.btn}>
          <Text style={style.textInput}>{title}</Text>
        </Pressable>
    )
}

const style= StyleSheet.create({
    btn: {
        backgroundColor: "#29D4FF",
        alignItems: "center",
        padding: 12,
        borderRadius: 4,
      },
      textInput:{
        fontStyle:"normal",
        fontWeight: "400"
      },   
})
export default CoustomButton;