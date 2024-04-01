import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import NoteList from '../components/NoteList';
import AddButton from '../components/addButton';

export default function AddNewTodo() {
  return (
    <View style={styles.container}>
      <Title text="My ToDo List"/>
      <NoteList/>
      <AddButton text="ADD NEW TODO" name="pencil-plus"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
  }
});