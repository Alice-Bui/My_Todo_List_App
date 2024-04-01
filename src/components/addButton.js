import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
export default AddButton = function({text, name}){
  return (
    <Pressable style={styles.Button}>
        <MaterialCommunityIcons name={name} color="white" size ={30} paddingHorizontal={10}/>
        <Text style = {styles.buttonName}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    Button: {
        width: '100%',
        height: '7%',
        backgroundColor: '#4e6f79',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    buttonName: {
        color: 'white',
        fontSize: 24,
        paddingHorizontal: 10
    }
});
