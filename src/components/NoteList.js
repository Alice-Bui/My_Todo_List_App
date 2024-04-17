import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
export default NoteList = function({todos, displayTodos}){
  const noteColor = ['#A4C2DB', '#EEF0FF', '#E8F8F3', '#FCF3DC'];

  //Displaying each Todo task
  const Todo = ({todo,cmp,del,dis}) => {
    const {id, title, description, completed, showDescription, showIcon}=todo
    return (
      <View>
        <View style={[styles.list, {backgroundColor: noteColor[id%4]}]}>
          <View style={styles.titleSection}>
            <Text style = {styles.title}>{title}</Text>
            
            {/*Toggle Display Mode through Caret Icon => show description*/}
            <Pressable onPress={()=>dis(id)}>
            <MaterialCommunityIcons name={showIcon} color="black" size ={30}/>
            </Pressable>
          </View>

          {/*Expanded Mode Display*/}
          {showDescription==true && (<View>
            <Text style = {styles.description}>{description}</Text>
            <View style={styles.buttonSection}>
              {/*Finish function*/}
              {!completed &&<Pressable onPress={()=>cmp(id)}>
                  <MaterialCommunityIcons name='cloud-check' color="#41A868" size ={35}/>
              </Pressable>}
              {/*Delete function*/}
              <Pressable onPress={()=>del(id)}>
                <MaterialCommunityIcons name='delete-forever' color="#CF5751" size ={35}/>
              </Pressable>
            </View>
          </View>
        )}
        </View>
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
    list: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        margin: '2%',
        borderRadius: 10,
        borderColor: '#544c4a',
        borderWidth: 2
    },
    title: {
      fontSize: 18,
      color: 'black',
      fontFamily: 'Poppins_600SemiBold'
    },
    titleSection: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    description: {
      paddingVertical: 5,
      fontSize: 12,
      color: 'black',
      fontFamily: 'Poppins_400Regular'
    },
    buttonSection: {
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      paddingVertical: 5 
    }
});