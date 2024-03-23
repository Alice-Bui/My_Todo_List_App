import { StyleSheet, Text, View, Pressable } from 'react-native';
export default AddButton = function({text}){
  return (
    <Pressable style={styles.Button}>
        <Text style = {styles.buttonName}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    Button: {
        width: '100%',
        height: '7%',
        backgroundColor: '#556351',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonName: {
        color: 'white',
        fontSize: 21
    }
});
