import { StyleSheet, Text, View } from 'react-native';
export default NoteList = function(){
  return (
    <View style = {styles.main}>
        <View style = {styles.line}/>
        <View style = {styles.listContainer}>
          <View style = {[styles.list, {backgroundColor: '#9fbbd4'}]}>
            <Text style = {styles.note}>Buy milk</Text>
          </View>
          <View style = {[styles.list, {backgroundColor: '#eef0ff'}]}>
            <Text style = {styles.note}>Buy bread</Text>
          </View>
          <View style = {[styles.list, {backgroundColor: '#e8f8f3'}]}>
            <Text style = {styles.note}>Do assignment</Text>
          </View>
          <View style = {[styles.list, {backgroundColor: '#fcf3dc'}]}>
            <Text style = {styles.note}>Go to work</Text>
          </View>
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
    },
    listContainer: {
        width: "100%",
        height: "95%",
        alignItems: "center"
    },
    list: {
        width: '100%',
        height: '7%',
        borderRadius: 10,
        borderColor: '#544c4a',
        borderWidth: 2,
        marginBottom: '3%',
        justifyContent: 'center'
    },
    note: {
        fontSize: 14,
        color: 'black',
        paddingHorizontal: 10,
    }
});