import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import NoteList from '../components/home_components/NoteList';
import AddButton from '../components/addButton';

export default function Home({navigation, route}) {
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
      <Title text="my todo list"/>
      <NoteList todos={todosData} displayTodos={displayTodos}/>
      <View style = {[{width: "100%"}, {height: "7%"}]}>
        <AddButton text="ADD NEW TODO" name="pencil-plus" f={addNewTodoPage} color='#4e6f79'/>
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