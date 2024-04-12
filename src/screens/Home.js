import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import Title from '../components/Title';
import NoteList from '../components/home_components/NoteList';
import AddButton from '../components/addButton';

export default function Home({navigation}) {
  const [todos, setTodo] = useState([
    {
      title: 'Buy milk',
      description: 'Going to woolies in the afternoon to get 2 cans',
    },
    {
      title: 'Buy bread',
      description: 'Going to woolies in the afternoon to get 2 cans',
    },
    {
      title: 'Do assignment',
      description: 'Assignment due on Sunday 10pm'
    },
    {
      title: 'Go to work',
      description: '2 shifts this week on Monday and Friday'
    }
  ]);

  const addNewTodoPage = ()=>navigation.navigate('Add New Todo');
  
  return (
    <View style={styles.container}>
      <Title text="My ToDo List"/>
      <NoteList todos={todos}/>
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
  }
});