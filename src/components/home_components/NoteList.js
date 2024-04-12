import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
export default NoteList = function({todos}){
  const bgColor = ['#9fbbd4', '#eef0ff', '#e8f8f3', '#fcf3dc'];
  const initialState = {visible: false, icon: 'menu-down'}
  const [description, setDescription] = useState(Array(todos.length).fill(initialState));
  const showDescription = (index) => {
    setDescription(preDes => {
      const newDes = [...preDes];
      newDes[index] = {
        ...newDes[index],
        visible: !newDes[index].visible,
        icon: newDes[index].icon === 'menu-down'?'menu-up':'menu-down' 
      };
      return newDes;
    });    
  }
  useEffect(()=>{
    console.log(description)
  }, [description]);

  return (
    <View style = {styles.main}>
        <View style = {styles.listContainer}>
          <FlatList
            data={todos}
            renderItem={({item, index}) => (
              <View key={index}>
                {/*Title*/}
                <View style = {[styles.listTitle, {backgroundColor: bgColor[index%4]}]}>
                  <Text style = {styles.note}>{item.title}</Text>
                  <Pressable onPress={()=>showDescription(index)}><MaterialCommunityIcons name={description[index].icon} color="black" size ={30}/></Pressable>
                </View>

                {/*Description*/}
                {description[index].visible && (<View style ={styles.listDescription}>
                  <Text style = {styles.note}>{item.description}</Text>
                </View>)}
              </View>
            )}
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