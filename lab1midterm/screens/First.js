import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function one() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Image source={require('../assets/IT_Logo.png')}  style={{width:270, height:225}} />
      <Text style={{fontSize: 20}}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text style={{fontSize: 12}}>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
      <View style={styles.button}>
        <Button title='PROGRAMS'/>
        <Button title='ABOUT US'/>

      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image : {
    flex: 5,
    height: 260,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
      fontSize: 26,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:"center"
  },
  button : {
    flex:1,
      width: 300,
     gap: 20
      
  }
});
