import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
export default NoteInput = function(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (
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
    );
}

const styles = StyleSheet.create({
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