import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import NoteList from '../components/home_components/NoteList';
import AddButton from '../components/addButton';

export default function Home({navigation, route}) {
  /*const [todos, setTodo] = useState([
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
  ]);*/

  const [todosData, displayTodos] = useState([]);
  //Listen for changes to {todos} from AddNewTodo page
  useEffect(() => {
    if (route.params?.todos) {
      displayTodos(route.params.todos);
      console.log("Home params:");
      console.log(route.params.todos);
    }
  }, [route.params?.todos])

  useEffect(() => {
    console.log("Home Screen:")
    console.log(todosData)
    //navigation.setParams({todos: {todosData}})
  }, [todosData])

  // Navigate to addNewTodo
  const addNewTodoPage = ()=>navigation.navigate({name: 'Add New Todo', params: {todos: todosData}, merge: true});

  return (
    <View style={styles.container}>
      <Title text="My ToDo List"/>
      <NoteList todos={todosData} displayTodos={displayTodos}/>
      <View style = {[{width: "100%"}, {height: "7%"}]}>
        <AddButton text="ADD NEW TODO" name="pencil-plus" f={addNewTodoPage} />
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