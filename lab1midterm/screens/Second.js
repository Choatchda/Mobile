import { StyleSheet, Text, View,Image, ScrollView, Touchable, TouchableOpacity, FlatList} from 'react-native';

export default function Second() {
    const data = [{id : 1, course :'Information Technology', img : require('../assets/course-bach-it.jpg') },
    {id : 2, course :'Data Science and Buisiness Analytic', img : require('../assets/course-bach-dsba.jpg') },
    {id : 3, course :'Bussiness Information Technology (Internation Program)', img : require('../assets/course-bach-bit.jpg') },
    {id : 4, course :'Artificial Intelligence Technology', img : require('../assets/course-bach-ait.jpg') }]

    return (
            <View style = {styles.container}>
                <View style= {styles.bar}>
                    <Image  source={require("../assets/IT_Logo.png")} style={{width:95, height:80, marginTop:20}}/>
                    <Text style={{fontSize: 40, marginLeft:40, marginTop: 45, color:"blue"}}> PROGRAMS</Text>
                </View>
            
            <FlatList data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return (
                    <View style={styles.data}>
                        <Image source={item.img}/>
                        <TouchableOpacity><Text style={{textAlign: "center", fontSize: 26}}>{item.course}</Text></TouchableOpacity>
                    </View>
                )

            }}>

            </FlatList>

            </View>
    );
}

const styles = StyleSheet.create({
        container : {
            flex: 1,
            backgroundColor: "gray",
            
        },
        bar : {
            backgroundColor: "lightblue",
            padding: 15,
            flexDirection: "row"
        }
});