import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './components/ChatList'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ChatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
});
