import { FlatList, StyleSheet, Text, View, Pressable, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import AddButton from '../addButton';
export default NoteList = function({todos, displayTodos}){
  //Visual for dynamic todolist
  const bgColor = ['#9fbbd4', '#eef0ff', '#e8f8f3', '#fcf3dc'];
  /*const showDescription = (index) => {
    setDescription(preDes => {
      const newDes = [...preDes];
      newDes[index] = {
        ...newDes[index],
        visible: !newDes[index].visible,
        icon: newDes[index].icon === 'menu-down'?'menu-up':'menu-down' 
      };
      return newDes;
    });    
  }*/

  //Displaying each Todo task
  const Todo = ({todo,cmp,del,dis}) => {
    const {id, title, description, completed, showDescription, showIcon}=todo
    return (
      <View>
        <View style={[styles.listTitle, {backgroundColor: bgColor[id%4]}]}>
          <Text style = {styles.note}>{title}</Text>
          <Pressable onPress={()=>dis(id)}>
            <MaterialCommunityIcons name={showIcon} color="black" size ={30}/>
          </Pressable>
        </View>
        {showDescription==true && (<View style ={styles.listDescription}>
            <Text style = {styles.note}>{description}</Text>
            <View style={[{flexDirection: 'row'}, {justifyContent: 'space-around'}]}>
              {!completed &&<Pressable onPress={()=>cmp(id)}>
                  <MaterialCommunityIcons name='star-check' color="black" size ={30}/>
                </Pressable>}

              <Pressable onPress={()=>del(id)}>
                <MaterialCommunityIcons name='delete-forever' color="black" size ={30}/>
              </Pressable>
            </View>
          </View>
        )}
      </View> 
  )}

  //Todo State Management
  const deleteTodo = (id) => {
    displayTodos(td => td.filter(t=>t.id!=id))
  }

  const completeTodo = (id) => {
    displayTodos(previousTodos=>{
      const newTodos = previousTodos.map(t=>{
        const nt = {...t}
        if (t.id === id) nt.completed = true
          return nt
      })
      return newTodos;
  })}

  const displayDescription = (id) => {
    displayTodos(previousTodos=>{
      const newTodos = previousTodos.map(t=>{
        const nt = {...t}
        if (t.id === id) {
          nt.showDescription = !nt.showDescription
          nt.showIcon = nt.showIcon === 'menu-down'?'menu-up':'menu-down'
        }
        return nt
      })
      return newTodos;
  })}

  /*<FlatList
            data={todos}
            renderItem={({item, index}) => (
              <View key={index}>
                <View style = {[styles.listTitle, {backgroundColor: bgColor[index%4]}]}>
                  <Text style = {styles.note}>{item.title}</Text>
                  <Pressable onPress={()=>showDescription(index)}><MaterialCommunityIcons name={description[index].icon} color="black" size ={30}/></Pressable>
                </View>

                {description[index].visible && (<View style ={styles.listDescription}>
                  <Text style = {styles.note}>{item.description}</Text>
                </View>)}
              </View>
            )}
          />
  */
  return (
    <View style = {styles.main}>
        <View style = {styles.listContainer}>
          <FlatList
          data={todos}
          renderItem={({item}) =><Todo todo={item} cmp={completeTodo} del={deleteTodo} dis={displayDescription}/>}
          keyExtractor={t=>t.id}
          />
        </View>
        <View style = {styles.line}/>
    </View>
  );
}

const styles = StyleSheet.create({
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
        margin: "3%"
    },
    listContainer: {
        width: "100%",
        height: "95%",
    },
    listTitle: {
        padding: 8,
        margin: '2%',
        borderRadius: 10,
        borderColor: '#544c4a',
        borderWidth: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    listDescription: {
      backgroundColor: 'white',
      padding: 8,
      margin: '2%',
    },
    note: {
        fontSize: 14,
        color: 'black'
    }
});