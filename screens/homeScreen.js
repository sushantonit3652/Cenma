import React from "react";
import { SafeAreaView, Text,StyleSheet } from "react-native";

const HomeScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',flex:1,
    }
})
export default HomeScreen;
