import { StyleSheet, Text, View,Image, ScrollView, Touchable, TouchableOpacity, FlatList, TextInput, Button} from 'react-native';
import { useState } from 'react';

export default function four() {
    const [text, setText] = useState("");
    const [answer, setAnswer] = useState([]);

    const submit = () => {
        setAnswer([...answer, text])
        setText("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.inbut}>
            <Text style={{fontSize: 20, textAlign:'center', marginTop:50}}>สมุดบันทึก</Text>
            <TextInput placeholder='เพิ่มข้อความที่นี้' style={styles.input} value={text} onChangeText={(input) => {setText(input);}}/>
            <Button title='บันทึก' onPress={submit} />
            <ScrollView>
                <View>
                    {answer.map(ans => <Text style={{width:300, textAlign: "center"}}>{ans}</Text>)}
                </View>
            </ScrollView>
            </View>
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex:1, 
            backgroundColor: 'white',
            alignItems: 'center',

            
        },
        input : {
            borderWidth: 2,
            width: 300,
            height:40,
            marginTop: 10

        },
        inbut:{
            
            width: 300,
            gap:10,
            justifyContent:'center'
            
        }

    });
