import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import First from './screens/First';
import Second  from './screens/Second';
import Four from './screens/Third';
export default function App() {
  return (
    <Four />
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
