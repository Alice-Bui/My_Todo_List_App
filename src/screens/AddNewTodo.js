import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Button, ToastAndroid, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { loadData, saveData } from '../datamodel/mydata';
import Title from '../components/Title';
import AddButton from '../components/addButton'

export default function AddNewTodo({navigation, route}) { 
  //Define the data  
  const [todosData, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const theme = [
  {background: '#FCF0DC',input: '#A8C6E0',button: '#517591'},
  {background: '#FFFBED', input: '#EEF0FF', button: '#656CA2'}, 
  {background: '#F7ECE9',input: '#E8F8F3',button: '#79A092'},
  {background: '#EAE8E8' ,input: '#FCF3DC',button: '#A0916C'}
  ];
  const [noteTheme, setTheme] = useState(theme[1]);

  useEffect(()=> {
    const firstLoad = async () => {
      const myData = await loadData()
      setTodos(myData.todosData)
      console.log(todosData)
    }
    firstLoad()
  }, [])
  
  useEffect(() => {
    if (route.params?.todos) {
      setTodos(route.params.todos);
      console.log("Home params:");
      console.log(route.params.todos);
    }
  }, [route.params?.todos])

  useEffect(() => {
    saveData({todosData})
    console.log("Add New Todo Screen:")
    console.log(todosData)
    setTheme(theme[(todosData.reduce((a,t)=>a<t.id?t.id:a, 0)+1)%4])
  }, [todosData])

  //When clicking the Save button
  const addTodo = () => {
    // If either of the input fields is empty => return nothing
    if (title===''||description==='') return

    //successful validation
    Alert.alert('Todo Added Successfully.')
    //ToastAndroid.show('Todo Added Successfully.', ToastAndroid.SHORT)

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
    <View style={[styles.container, {backgroundColor: noteTheme.background}]}>
        <Title text="add new todo"/>
        <View style = {styles.main}>
            <View style = {styles.listContainer}>
                <Text style={styles.subtitle}>title</Text>
                <TextInput
                    style={[styles.input, {backgroundColor: noteTheme.input}]}
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Add a title"
                />
                <Text style={styles.subtitle}>description</Text>
                <TextInput
                    multiline
                    numberOfLines={6}
                    style={[styles.input, {textAlignVertical: "top"}, {backgroundColor: noteTheme.input}]}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Add some details"
                />
            </View>
        </View>
        <View style={styles.buttonSection}>
            <View style = {styles.button}>
                <AddButton text="Back" name="tooltip-remove" f={homePage} color={noteTheme.button}/>
            </View>
            <View style = {styles.button}>
                <AddButton text="Save" name="content-save-check" f={addTodo} color={noteTheme.button}/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
  },
  main: {
    width: "100%",
    height: "75%",
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
      marginBottom: '7%',
      fontSize: 16,
      fontFamily: 'Poppins_400Regular',
  },
  subtitle: {
      fontSize: 22,
      fontFamily: 'Poppins_500Medium',
      margin: '2%'
  },
  buttonSection: {
    flexDirection: 'row',
    height: '7%'
  },
  button: {
    marginHorizontal: '5%',
    width: '40%'
  }
});