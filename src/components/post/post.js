import { Text, View ,StyleSheet} from "react-native"

const Post=()=>{
    return(
        <View>
            <Text style={styles.textInput}>post page</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    textInput:{
        color:"white",
    }
})

export default Post;