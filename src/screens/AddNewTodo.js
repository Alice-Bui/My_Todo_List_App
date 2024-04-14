import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Button, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';
import AddButton from '../components/addButton';
import NoteInput from '../components/addTodo_components/noteInput';

export default function AddNewTodo({navigation, route}) { 
  //Define the data  
  const [todosData, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //Listen for changes to {todos} from Home page
  /*useEffect(() => {
    setTodos(route.params.todos);
    console.log("Add New Todo params:");
    console.log(route.params.todos);
  }, [route.params?.todos])*/

  useEffect(() => {
    if (route.params?.todos) {
      setTodos(route.params.todos);
      console.log("Home params:");
      console.log(route.params.todos);
    }
  }, [route.params?.todos])

  useEffect(() => {
    console.log("Add New Todo Screen:")
    console.log(todosData)
    //navigation.setParams({todos: {todosData}})
  }, [todosData])

  //When clicking the Save button
  const addTodo = () => {
    // If either of the input fields is empty => return nothing
    if (title===''||description==='') return

    //successful validation
    ToastAndroid.show('Todo Added Successfully.', ToastAndroid.SHORT)

    //Creating id
    const maxid = todosData.reduce((a,t)=>a<t.id?t.id:a, 0) 

    //Updating the todosData
    setTodos(todos => [...todos,{id:maxid+1, title, description, completed:false, showDescription: false, showIcon: 'menu-down'}])
    
    //Clear the input fields
    setTitle('')
    setDescription('')
  }

  // Navigate back to Home page and pass todosData
  const homePage = ()=>navigation.navigate({name: 'Home', params: {todos: todosData}, merge: true});
  
  return (
    <View style={styles.container}>
        <Title text="Add New Todo"/>
        <View style = {styles.main}>
            <View style = {styles.listContainer}>
                <Text style={styles.subtitle}>Title</Text>
                <TextInput
                    style={[styles.input, {height: "10%"}]}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Add a title"
                />
                <Text style={styles.subtitle}>Description</Text>
                <TextInput
                    multiline
                    numberOfLines={6}
                    style={[styles.input, {textAlignVertical: "top"}]}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Add some details"
                />
            </View>
        </View>
        <View style={[{flexDirection: 'row'}, {height: "7%"}]}>
            <View style = {[{marginHorizontal: "5%"}, {width: "40%"}]}>
                <AddButton text=" Cancel" name="tooltip-remove" f={homePage}/>
            </View>
            <View style = {[{marginHorizontal: "5%"}, {width: "40%"}]}>
                <AddButton text="Save" name="content-save-check" f={addTodo}/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf3dc',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
  },
  main: {
    width: "100%",
    height: "60%",
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  listContainer: {
      width: "95%",
      height: "95%",
  },
  input: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginBottom: '10%',
      fontSize: 18
  },
  subtitle: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'monospace',
      margin: '2%'
  }
});