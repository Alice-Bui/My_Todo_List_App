import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import NoteList from '../components/NoteList';
import AddButton from '../components/addButton';

export default function Home({navigation}) {
  const addNewTodoPage = ()=>navigation.navigate('Add New Todo');
  return (
    <View style={styles.container}>
      <Title text="My ToDo List"/>
      <NoteList/>
      <View style = {[{width: "100%"}, {height: "7%"}]}>
        <AddButton text="ADD NEW TODO" name="pencil-plus" navigation={addNewTodoPage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCEBDE',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    justifyContent: 'space-between',
  }
});