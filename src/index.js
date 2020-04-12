import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api';

// Can not use HTML tag
// Elements does not have meaning
// Does not have default styles
// All componets have 'display:flex'

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, etc

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `New project ${Date.now()}`,
      owner: 'Hercules Hamanaka'
    });

    const newProject = response.data;

    setProjects([...projects, newProject]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159c1'></StatusBar>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={( {item: project} ) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        >
        </FlatList>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.6} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Add new project</Text>
        </TouchableOpacity>

      </SafeAreaView>


      {/* <View style={ styles.container }>
        <Text style={ styles.title }>Hello Go Stack!</Text>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </View> */}

    </>
  );
}

const styles = StyleSheet.create({
  // can be any name
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  },

});