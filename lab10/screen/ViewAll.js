import React, { Component } from "react";
import { ScrollView, Image } from "react-native";
import firebase from "../database/firebaseDB";
import { ListItem } from "react-native-elements";

class ViewStudent extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("Students");

    this.state = {
      student_list: [],
    };
  }

  getCollection = (querySnapshot) => {
    const all_data = [];
    querySnapshot.forEach((res) => {
      //   console.log("res: ", res);
      //   console.log("res.data() : ", res.data());

      const { id, name, GPA } = res.data();
      all_data.push({
        key: res.id,
        id,
        name,
        GPA,
      });
    });
    // console.log("all_data : ", all_data);
    this.setState({
      student_list: all_data,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.subjCollection.onSnapshot(this.getCollection);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {navigation} = this.props
    return (
      <ScrollView>

        {this.state.student_list.map((item, i) => {
          return (
            <ListItem key={i} bottomDivider onPress={ () => { navigation.navigate("Student Info", {key:item.key, id:item.id, name:item.name, GPA:item.GPA}); } }>
              <ListItem.Content>
                <ListItem.Title>{item.id}</ListItem.Title>
                <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.GPA}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </ScrollView>
    );
  }
}

export default ViewStudent;
