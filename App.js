import React from "react";
import { StyleSheet, Text, View, WebView } from "react-native";
import CKEditor from "./ckeditor/";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <CKEditor />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
