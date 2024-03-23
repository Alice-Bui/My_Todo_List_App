import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style = {styles.main}>
        <View style = {styles.line}/>
        <View style = {styles.listContainer}>
          <View style = {[styles.list, {backgroundColor: '#AFC9CC'}]}>
            <Text style = {styles.note}>Buy milk</Text>
          </View>
          <View style = {[styles.list, {backgroundColor: '#A68CB5'}]}>
            <Text style = {styles.note}>Buy bread</Text>
          </View>
          <View style = {[styles.list, {backgroundColor: '#998981'}]}>
            <Text style = {styles.note}>Do assignment</Text>
          </View>
          <View style = {[styles.list, {backgroundColor: '#C2C2A2'}]}>
            <Text style = {styles.note}>Go to work</Text>
          </View>
        </View>
        <View style = {styles.line}/>
      </View>
      <Pressable style={styles.addButton}>
        <Text style = {styles.buttonName}>ADD NEW TODO</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6C2A1',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '12%',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black'
  },
  main: {
    width: '100%',
    height: '83%',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  line: {
    backgroundColor: 'black',
    width: '100%',
    height: 3,
  },
  listContainer: {
    width: "100%",
    height: "95%",
    alignItems: "center"
  },
  list: {
    width: '100%',
    height: '7%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: '3%',
    justifyContent: 'center'
  },
  note: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 10,
  },
  addButton: {
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
