import React, { Component } from "react";
import { StyleSheet, Text, View, Return } from "react-native";

return(
  <View style={styles.container}>

  <SafeAreaView style={styles.droidSafeArea} />

  <View style={styles.appTitle}>

  <View style={styles.appIcon}>

  <Image

  source={require("../assets/logo.png")}

  style={styles.iconImage}

  ></Image>

  </View>

  <View style={styles.appTotleTextContainer}>

  <Text style={styles.appTitleText}>New Post</Text>

  </View>

  </View>

  <View style={styles.feildsContainer}>

  <ScrollView>

  <Image

  source={preview_image[this.state.previewImage]}

  style={styles.previewImage}

  ></Image>

  <View style={{ height:
  RFValue(this.state.dropdownHeight) }}>

  DropDownPicker

  items={[

    { lable: "Image 1", value: "image_1" },
     {lable: "Image 2", value: "image_2" }, 
     {lable: "Image 3", value: "image_3" },
      {lable: "Image 4", value: "image_4" },
       {lable: "Image 5", value: "image_5" },
        {lable: "Image 6", value: "image_6" },
         {lable: "Image 7", value: "image_7" },
    
  ]}

  defaultValue={this.state.previewImage}

  containerStyle={{
    height: 40,

    borderRadius: 20,

    marginBottom: 10
  }}

  onOpen={ {} => {

    this.setState({ dropdownHeight: 170});
  }}
  onClose={() => {
    this.setState({ dropdownHeight });
  }}

  style={{ backgroundColor: "transparent" }}

  itemStyle={{
    justifyContent: "flex-start"
  }}
  DropDownStyle={{ backgroundColor: "#2a2a2a"
  lableStyle={{

    color: "white"
  }}
  arrowStyle={{

    color: "white"
  }}

  onChangeItem={item =>
  this.setState ({
    previewImage: item.value
  })
  }

  />

  </View>

  <TextInput

  style={styles.inputFont}

  onChangeText={caption => this.setState({ caption
  })}

  placeholder={"Caption"}

  placeholderTextColor="white"

  />

  </ScrollView>

  </View>

  <View style={{ flex: 0.08}} />

  </View>
  }}
);