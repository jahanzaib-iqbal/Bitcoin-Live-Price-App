
import React from "react";
import { View } from "react-native";
import ApiComponent from "./component/ApiComponent";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#008080",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ApiComponent />
    </View>
  );
}