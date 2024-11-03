import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
     {/* Today's Tasks*/}
     <View styles={styles.taskWrapper}>
      <Text styles={styles.sectionTitles}>Today's Tasks</Text>

      <View styles={styles.items}>
        {/* This is where the tasks will go*/}
        <Task text={'Task 1'}/>
        <Task text={'Task 2'}/>
      </View>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

    
    taskWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitles:{
      fontSize: 24,
      fontWeight: 'bold'
    },
    items:{
      marginTop:30,
    },
});
