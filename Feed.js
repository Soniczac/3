import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.2,
    justifyContentContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },
  carContainer: {
    flex: 0.85
  }
});

async addPost() {
  if (
    this.state.caption
  ) {
    let postData = {
      preview_image: this.state.previewImage,
      caption: this.;state.caption,
      author: firebase.auth().currentUser.displayName,
      created_on: new Date(),
      author_uid: firebase.auth().currentUser.uid,
      profile_image: this.state.profile_image,
      likes: 0
    };
    await firebase.database()
    .ref(
      "/posts/" +
      Math.random()
      .toString(36)
      .slice(2)
    )
    .set(postData)
    .then(function (snapshot) { });
    this.props.setUpdateToTrue();
    this.props.navigation.navigate("Feed");
  } else {
    Alert.alert(
      "Error",
      "All feilds are required!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      {cancelable: false}
    );
  }
}