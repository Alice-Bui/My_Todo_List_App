import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect, useState,  } from 'react';
import Title from '../components/Title';
import AddButton from '../components/addButton';
import NoteInput from '../components/addTodo_components/noteInput';

export default function AddNewTodo({navigation}) {
    const homePage = ()=>navigation.navigate('Home');
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
    const bgColorArr = ['#9fbbd4', '#eef0ff', '#e8f8f3', '#fcf3dc'];
    const [bgColor, setBgColor] = useState('');
    useEffect(()=> {
      setBgColor(bgColorArr[todos.length%4])
    }, [todos])
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
        <Title text="Add New Todo"/>
        <NoteInput/>
        <View style={[{flexDirection: 'row'}, {height: "7%"}]}>
            <View style = {[{marginHorizontal: "5%"}, {width: "40%"}]}>
                <AddButton text="Back" name="tooltip-remove" navigation={homePage}/>
            </View>
            <View style = {[{marginHorizontal: "5%"}, {width: "40%"}]}>
                <AddButton text="Save" name="content-save-check"/>
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
  }
});