import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Addstudent extends Component {
  constructor() {
    super();

    this.subjCollection = firebase.firestore().collection("Students");

    this.state = {
      id: "",
      name: "",
      GPA: "",
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeSubject() {
    this.subjCollection
      .add({
        id: this.state.id,
        name: this.state.name,
        GPA: this.state.GPA,
      })
      .then((res) => {
        this.setState({
          id: "",
          name: "",
          GPA: "",
        });
        Alert.alert(
          "Adding Alert",
          "New subject was added!! Pls check your DB!!"
        );
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
        <Button title="Add Subject" onPress={() => this.storeSubject()} />
        <Button title="View Student"  onPress={ () => { navigation.navigate("Student List"); } }/>
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

export default Addstudent;