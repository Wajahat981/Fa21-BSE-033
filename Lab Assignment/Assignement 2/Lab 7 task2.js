import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const StudentRecordsApp = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [searchName, setSearchName] = useState('');

  const addStudent = () => {
    if (name.trim() !== '') {
      setStudents([...students, name]);
      setName('');
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const searchStudent = () => {
    // Filtering students whose name matches the search query
    const searchResult = students.filter(student =>
      student.toLowerCase().includes(searchName.toLowerCase())
    );
    return searchResult;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Records</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter student name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Button title="Add Student" onPress={addStudent} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search student"
          value={searchName}
          onChangeText={text => setSearchName(text)}
        />
        <Button title="Search" onPress={searchStudent} />
      </View>

      <FlatList
        data={students}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
            <Button title="Delete" onPress={() => deleteStudent(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
  },
});

export default StudentRecordsApp;
