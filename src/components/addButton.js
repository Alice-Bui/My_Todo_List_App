import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
export default AddButton = function({text, name, navigation}){
  return (
    <Pressable style={styles.Button} onPress={navigation}>
        <MaterialCommunityIcons name={name} color="white" size ={30} padding={10}/>
        <Text style = {styles.buttonName}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#4e6f79',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    buttonName: {
        color: 'white',
        fontSize: 24,
        padding: 10
    }
});
