import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Porfile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return(
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Profile" component={Porfile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator

componentDidMount() {
  let theme;
  firebase
  .database()
  .ref("/users/" + firebase.auth().currentUser.uid)
  .on("value", function (snapshot) {
    theme = snapshot.val().current_theme;
  });
  this.setSate({ light_theme: theme === "light"? true : false });
}

render() {
  let props = this.props;
  return (
    <Drawer.Navigator 
    drawerContentOptions= {{
      activeTintColor: "#e91e63",
      inactiveTintColor: this.state.light_theme ? "black" : "white",
      itemStyle: {marginVertical: 5}
    }}
    drawerContent={props => <CustomSidebarMenu {...props} />}
    >
    <Drawer.Screen
    name="Home"
    component={StackNavigator}
    options={{ unmountOnBlur: true}}
    />
    <Drawer.Screen
    name="Profile"
    component={Profile}
    options={{ unmountOnBlur: true }}
    />
    <Drawer.Screen
    name="Logout"
    component={Logout}
    options={{ unmountOnBlur: true}}
    />
    </Drawer.Navigator>
  )
}