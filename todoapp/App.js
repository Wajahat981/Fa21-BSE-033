import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Math.random().toString(), text, completed: false }]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setText(value)}
          value={text}
          placeholder="Add a todo..."
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTodo(item.id)} onLongPress={() => deleteTodo(item.id)}>
            <View style={[styles.todoItem, item.completed && styles.completed]}>
              <Text style={styles.todoText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 4,
    elevation: 3,
  },
  todoText: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
});
