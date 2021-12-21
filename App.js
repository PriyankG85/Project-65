import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import { Header } from "react-native-elements";
import * as Speech from "expo-speech";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  speech = () => {
    Speech.speak(this.state.text);
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="orangered"
          containerStyle={{ width: "100%", height: 60 }}
          centerComponent={{
            text: "Text to Speech Converter",
            style: { fontSize: 18, color: "aliceblue" },
          }}
          center
        />
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Enter the text:</Text>
          <TextInput
            style={styles.input}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <TouchableOpacity style={styles.btn} onPress={() => this.speech()}>
            Play
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#efefef",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  text: {
    marginTop: 180,
    fontSize: 20,
  },
  input: {
    width: "70%",
    height: 35,
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 6,
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "black",
  },
  btn: {
    width: 80,
    height: 30,
    fontSize: 18,
    marginTop: 50,
    color: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
});
