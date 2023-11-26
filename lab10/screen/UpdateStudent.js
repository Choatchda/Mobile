import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Update extends Component {
    
  constructor() {
    super();

    this.state = {
      key: "",
      id: "",
      name: "",
      GPA: "",
    };
  }

  componentDidMount() {
    const {key, id , name, GPA} = this.props.route.params
    const subjDoc = firebase
      .firestore()
      .collection("Students")
      .doc(key);
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        this.setState({
          key: key,
          id: id,
          name: name,
          GPA: GPA,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateStudent() {
    const updateSubjDoc = firebase
      .firestore()
      .collection("Students")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        id: this.state.id,
        name: this.state.name,
        GPA: this.state.GPA,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The subject was updated!! Pls check your DB!!"
        );
    });
}
deleteStudent() {
      const {navigation} = this.props
    const delSubjDoc = firebase
      .firestore()
      .collection("Students")
      .doc(this.state.key);
      delSubjDoc.delete().then((res) => {
          Alert.alert(
              "Deleting Alert",
              "The subject was deleted!! Pls check your DB!!"
              );
              navigation.navigate("Student List")
    });
  }

  render() {
      const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Student ID"}
          value={this.state.id}
          onChangeText={(val) => this.inputValueUpdate(val, "id")}
        />
        <Input
          placeholder={"Student Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"GPA"}
          value={this.state.GPA}
          onChangeText={(val) => this.inputValueUpdate(val, "GPA")}
        />
        <View style={styles.Button}>
        <Button
          title="Update Student"
          onPress={() => {
            this.updateStudent();
            navigation.navigate("Student List")
          }}
        />
                <Button
          title="Delete Student"
          onPress={() => {
            this.deleteStudent();
          }}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  
  Button: {
    gap: 10
  }
});

export default Update;