import { StyleSheet, Text, View } from 'react-native';
export default Title = function({text}){
  return (
    <View style={[{width: "100%"}, {height: "10%"}, {alignItems: 'center'}]}>
      <Text style={styles.title}>
        {text}
      </Text>
      <View style={styles.line}/>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'monospace',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
    },
    line: {
      backgroundColor: 'black',
      width: '100%',
      height: 3,
      margin: "3%"
  }
});
