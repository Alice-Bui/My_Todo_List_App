import { StyleSheet, Text, View } from 'react-native';
export default Title = function({text}){
  return (
    <Text style={styles.title}>
        {text}
    </Text>
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'monospace',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black'
    }
});
