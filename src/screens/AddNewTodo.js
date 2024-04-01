import { StyleSheet, Text, View, Pressable } from 'react-native';
import Title from '../components/Title';
import AddButton from '../components/addButton';
import NoteInput from '../components/noteInput';

export default function AddNewTodo({navigation}) {
    const homePage = ()=>navigation.navigate('Home');
  return (
    <View style={styles.container}>
        <Title text="Add New Todo"/>
        <NoteInput/>
        <View style={[{flexDirection: 'row'}, {height: "7%"}]}>
            <View style = {[{marginHorizontal: "5%"}, {width: "40%"}]}>
                <AddButton text=" Cancel" name="tooltip-remove" navigation={homePage}/>
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
    backgroundColor: '#fcf3dc',
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    justifyContent: 'flex-start',
  }
});