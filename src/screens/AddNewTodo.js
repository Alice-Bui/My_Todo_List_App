import { StyleSheet, Text, View, Pressable, TextInput, FlatList, Button, ToastAndroid } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';
import AddButton from '../components/addButton';
import NoteInput from '../components/addTodo_components/noteInput';

export default function AddNewTodo({navigation, route}) {    
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const homePage = ()=>navigation.navigate('Home', {name:'Peter', age: '29'});

    const addTodo = () => {
      {/* input field is empty */}
      if (title===''||description==='') return

      {/*successful validation*/}
      ToastAndroid.show('Todo Added Successfully.', ToastAndroid.SHORT)

      {/*Creating id*/}
      const maxid = todos.reduce((a,t)=>a<t.id?t.id:a, 0) 
      setTodos(todos => [...todos,{id:maxid+1, title, description, completed:false}])
      setTitle('')
      setDescription('')
      console.log(todos)
    }

    const Todo = ({todo,cmp,del}) => {
      const {id, title, description, completed}=todo
      return (
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-around'}}>
          <Text>({id})
            <Text>{title}</Text>
            <Text>{description}</Text>
          </Text>
          {!completed && <Button title='complete' onPress={()=>cmp(id)}/>}
          <Button title = 'delete' onPress={()=>del(id)}/>
        </View>
      )
    }

    const deleteTodo = (id) => {
      setTodos(td => td.filter(t=>t.id!=id))
    }

    const completeTodo = (id) => {
      setTodos(ts=>{
        const ntd = ts.map(t=>{
          const nt = {...t}
          if (t.id === id) nt.completed = true
          return nt
        })
        return ntd
      })
    }
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
                <AddButton text=" Cancel" name="tooltip-remove" navigation={homePage}/>
            </View>
            <View style = {[{marginHorizontal: "5%"}, {width: "40%"}]}>
                <AddButton text="Save" name="content-save-check" navigation={addTodo}/>
            </View>
        </View>

        <FlatList
        data={todos}
        renderItem={({item}) =><Todo todo={item} cmp={completeTodo} del={deleteTodo}/>}
        keyExtractor={t=>t.id}
        />
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